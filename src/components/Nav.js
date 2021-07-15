import React, { useContext } from 'react'
import { MusicContext } from '../context/MusicContext'

const Nav = () => {
    const [musics] = useContext(MusicContext)
    return (
        <div style={{width: "100%", backgroundColor: "#222", color: "#fff",}}>
           <div style={{padding:"20px", display: "flex", justifyContent: "space-between"}}>
                <p>The Nav</p>
                <p>Total Music: {musics.length}</p>
            </div>
        </div>
    )
}

export default Nav