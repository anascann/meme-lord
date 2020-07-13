import React ,{useState,useEffect}from 'react';
import Axios from "axios";
import {Button,Col,Row,Container,Grid} from "reactstrap"
import DownloadLink from "react-download-link";
import Header from './Components/Header';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Meme from './Components/Meme';
import { useHistory } from "react-router-dom";
import { FacebookShareButton,
  InstapaperShareButton,TwitterShareButton,
   WhatsappShareButton, FacebookIcon, InstapaperIcon,WhatsappIcon,} from "react-share"
   import Home from "./Components/Home"
import './App.css';


function App(){

  return (
    <Router>
    <div>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    
    </Switch>
     
     
    </div>
    </Router>
  )
  ;
}

export default App;