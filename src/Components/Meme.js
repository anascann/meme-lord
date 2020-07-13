import React from 'react'
import {Card, CardImg,Row,Col,variant,idx} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Meme({template,onClick}) {
    return (
    
        <div className='item-center'>
        <Card
        bg="dark"
        key={template.id}
        text='light'
        style={{ width: '18rem' }}
        className="mb-2"
        
      >
            <CardImg style={{width:'18rem'}}key={template.id}
            src={template.url} alt={template.name}
            
            onClick={onClick} border="primary"/>
            
</Card>
           
            
        </div>

    )
}
