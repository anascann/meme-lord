import React ,{useState,useEffect}from 'react';
import Axios from "axios";
import {Button,Row,Col,Container} from "reactstrap"
import DownloadLink from "react-download-link";


import Meme from './Meme';
import { useHistory } from "react-router-dom";
import { FacebookShareButton,
  InstapaperShareButton,TwitterShareButton,
   WhatsappShareButton, FacebookIcon, InstapaperIcon,WhatsappIcon,} from "react-share"




const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };

  function Home() {

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
          
            <img style={{ width: 400 }} src={maymay} alt="" />
            <h3 to="/">Click Below and save the meme or share</h3>
            <Button color="primary" onClick={downloadFile}>Download</Button>
            <FacebookShareButton url={maymay}><FacebookIcon round={true}/></FacebookShareButton>
            <WhatsappShareButton url={maymay}><WhatsappIcon round={true}/></WhatsappShareButton>
            {console.log(maymay)}
          </div>
        );
      }


    return (
        <div style={{ textAlign: "center" }}>
    
      
        <h2> HeY!! Pick a Template O' Meme Lord</h2>
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
          <Button color="primary" type="submit">create meme</Button>
          
         
          </form>
           
        }
        
      
         
        <Container><Row>
        { !template && meme.map(template=>{
            
            
              return (
                  
                <Col md={3}>
          <Meme template={template}
           onClick={()=>{
              setTemplate(template);
            }}/></Col>
        
              
            )
            
        })}</Row></Container>
            </div>
            
          
    
        
          
    )
}

export default Home;
