import React ,{useState,useEffect}from 'react';
import Axios from "axios";
import {Button,Col,Row,Container,Grid} from "reactstrap"
import DownloadLink from "react-download-link";
import Header from './Components/Header';
import TextBox from './Components/TextBox';
import Meme from './Components/Meme';
import { useHistory } from "react-router-dom";
import { FacebookShareButton,
  InstapaperShareButton,TwitterShareButton,
   WhatsappShareButton, FacebookIcon, InstapaperIcon,WhatsappIcon,} from "react-share"
import './App.css';

const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};


function App() {
  const [meme, setMeme]=useState([])
  const[template, setTemplate]=useState(null);
  const [topText, setTopText]=useState('');
  const[bottomText,setBottomText]=useState('');
  const[maymay,setMaymay]=useState(null)

  const downloadFile = () => {
    window.location.href = `${maymay}`
  }
  
 
  useEffect(() => {
   const fetchmeme=async()=>{
       const response=await Axios.get("https://api.imgflip.com/get_memes")
 
 const data=response.data;
 console.log(data.data.memes)
 setMeme(data.data.memes);
   }

   fetchmeme();
  }, [])

  if (maymay) {
    return (
     
      <div style={{ textAlign: "center" }}>
      <Header/>
        <img style={{ width: 400 }} src={maymay} alt="" to="/"/>
        <h3>Click Below and save the meme</h3>
        <Button onClick={downloadFile}>Download</Button>
        <FacebookShareButton url={maymay}><FacebookIcon/></FacebookShareButton>
        <WhatsappShareButton url={maymay}><WhatsappIcon/></WhatsappShareButton>
        {console.log(maymay)}
      </div>
    );
  }

  return (
     
    <div >   
   
    <Header/>
  
    <h1> HeY!! Pick a Template O' Meme Lord</h1>
    {template && <form onSubmit={async e=>{
      e.preventDefault();
      const params={
        template_id: template.id,
        text0:topText,
        text1:bottomText,
        username: 'anascan',
        password: '12345678'
      } 

      const responseM=await fetch(
        `https://api.imgflip.com/caption_image${objectToQueryParam(
          params
        )}`
      );
    const json = await responseM.json();
            setMaymay(json.data.url);
    }}>
      
      <Meme template={template}/>
      <input type="text" placeholder="top text" value={topText} onChange={e=>setTopText(e.target.value)}/>
      <input type="text" placeholder="bottom text" value={bottomText} onChange={e=>setBottomText(e.target.value)}/>
      <button type="submit">create meme</button>
      
      </form> 
    }
    <Container>
     <Row xs={1} md={2}>
    {
        !template && meme.map(template=>{
          
         
          return (
            <Col sm>
      <Meme template={template}
        onClick={()=>{
          setTemplate(template);
        }}/>
        </Col>
          
        )})}</Row></Container>

    </div>
      

  );
}

export default App;
