import React from 'react'
import {Navbar } from "react-bootstrap"
import {Redirect, Link} from "react-router-dom";
import troll from "./img/Trollface-PNG-Image.png"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={troll}
            width="80"
            height="60"
            className="d-inline-block align-top"
          />{' '}
         
        </Navbar.Brand>
        <h1 color="white"> Meme Generator</h1>
      </Navbar>
            
      
    )
}
