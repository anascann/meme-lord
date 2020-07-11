import React from 'react'

export default function Meme({template,onClick}) {
    return (
        <div>
            <img style={{width:200}}key={template.id}
            src={template.url} alt={template.name}
            
            onClick={onClick}/>
        </div>
    )
}
