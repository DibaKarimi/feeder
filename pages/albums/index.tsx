import Link from 'next/link';
import React from 'react'

export default function Albums({ albums }: any) {
   
    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map((album:any) => (
                    <li key={album.id}>
                        <Link href={`/albums/${album.id}`}>
                            <h3>{album.title}</h3></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    console.log(" Albums Page Generated | SSR")
    const res = await fetch("http://localhost:3001/albums");
    const albums = await res.json();
    return {
        props: { albums, }
    }
}