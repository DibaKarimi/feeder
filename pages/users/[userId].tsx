import { useRouter } from "next/router"

function UserDetail({ data }: any) {
   
    return (
        <div>
            <h1>UserDetail</h1>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
        </div>
    )
}

export default UserDetail

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    console.log(data)
    const userData = data.slice(0, 4);
    const paths = userData.map((user: any) => ({
        params: {
            userId: user.id.toString(),
        },
    }));
    return {
        paths,
        fallback: "blocking",
    }
}
export async function getStaticProps(context: any) {
    console.log("Regerating Users Details Page| ISR")
    const { params } = context;
    const res = await fetch(`http://localhost:3001/users/${params.userId}`)
    const data = await res.json();
    if (!data.name) {
        return {
            //notFound: true,
            redirect: { destination: "/" }
        }
    }
    return {
        props: { data },
        revalidate: 5,
    }
}