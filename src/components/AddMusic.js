import React, { useState, useContext } from 'react'
import { MusicContext } from '../context/MusicContext'

const AddMusic = () => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [musics, setMusics] = useContext(MusicContext)

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const updateArtist = (e) => {
        setArtist(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMusics(prev => [...prev, {title, artist}])
    }
    return (
       <form style={{marginTop: "20px", marginBottom: "5px", }} onSubmit={handleSubmit}>
           <input style={{padding:"5px", marginRight: "2px", marginLeft:"2px"}} type="text" name="title" placeholder="title" onChange={updateTitle} value={title}/>
           <input style={{padding:"5px", marginRight: "2px", marginLeft:"2px"}} type="text" name="artist" placeholder="artist" onChange={updateArtist} value={artist}/>
           <button style={{padding:"5px", marginRight: "2px", marginLeft:"2px"}} type="submit">Submit</button>
        </form>
    )
}

export default AddMusic
