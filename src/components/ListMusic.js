import React, { useContext } from 'react'
import { MusicContext } from '../context/MusicContext';
import Music from './Music';

const ListMusic = () => {
    const [musics] = useContext(MusicContext)
    
    return (
        <>
            {musics.map(music => (
                <Music music={music} key={music.id} />
            ))}
        </>
    )
}

export default ListMusic
