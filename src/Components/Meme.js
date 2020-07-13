import React from 'react'
import {Card, CardImg,Row,Col} from "reactstrap"

export default function Meme({template,onClick}) {
    return (
    
        <div>
        
            <CardImg style={{width:'20%'}}key={template.id}
            src={template.url} alt={template.name}
            
            onClick={onClick}/>
           

           
            
        </div>

    )
}
