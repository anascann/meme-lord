import React from 'react'
import "../App.css"
import troll from "./img/Trollface-PNG-Image.png"
export default function Header() {
    return (
     <header>
     <img src={troll}/>
     <h1>Meme Generator</h1>
     </header>
            
      
    )
}
