import React from 'react'

const Music = ({music}) => {
    return (
        <div>
           <h3>{music.title}</h3> 
           <p>{music.artist} </p>
        </div>
    )
}

export default Music