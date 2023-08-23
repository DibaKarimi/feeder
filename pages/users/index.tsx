import Link from 'next/link';
import React from 'react'

export default function users({ data }: any) {
   
    return (
        <div>
            <ul>
                {
                    data.map(({ id, name }: any) =>
                        <li key={id}>
                            <Link href={`/users/${id}`}>{ name }</Link>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    console.log("Regerating Users Page| ISR")
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    
    return {
        props: { data, },
        revalidate: 10, //seconds
    }
}