import { NOTFOUND } from 'dns';
import React from 'react'

export default function AlbumDetails({ album }: any) {
    console.log("album====", album)
    return (
        <div>
            <h2>AlbumDetails</h2>
            <h3>{album.id} - {album.userId} | {album.title} </h3>
        </div>
    )
}
export async function getServerSideProps(context: any) {
    console.log(" Album Details Page Generated | Dynamic SSR")
    const { params } = context;
    const res = await fetch(`http://localhost:3001/albums/${params.albumId}`);
    const data = await res.json();
    if (!data.title) return {
        // notFound: true,
        redirect: { destination: "/albums" },
    }
    
    return { props: { album: data }, }
}
