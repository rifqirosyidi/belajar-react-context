import React, { useState, createContext } from 'react'

export const MusicContext  = createContext();

export  const MusicProvider = ({ children }) => {
    const [musics, setMusics] = useState([
        {
            id:1,
            title: "On The Horizon",
            artist: "Michael FK"
        }, {
            id:2,
            title: "An Altered State",
            artist: "Buruks"
        }
    ]);
    return (
        <MusicContext.Provider value={[musics, setMusics]}>
            {children}
        </MusicContext.Provider>
    )
}

