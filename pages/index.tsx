
import styles from "../styles/Home.module.css"

export default function Home({posts}:any) {
  return (
    <div className={styles.container}>
      <h3>Feeder Project</h3>
      <ul>
        {
          posts.map((post:any) => (<li key={post.id}>{post.title}</li>))

        }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  console.log("Home page Generated | SSG")
  const res = await fetch("http://localhost:3001/posts")
  const data = await res.json();
  
  return {
    props: {
     posts: data
    },
  }
}