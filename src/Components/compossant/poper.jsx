import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HelmetMetaData from "./reacthamlet";
import {  FacebookShareButton,TwitterShareButton, WhatsappShareButton,TwitterIcon, FacebookIcon,  WhatsappIcon} from 'react-share'
class Poppers extends Component {
   render() {

   return (
     <div>
       
  <HelmetMetaData></HelmetMetaData>

  <div className="socialMediaPopper">
  <span>Partager</span>
 
   <FacebookShareButton 
     url={"https://ogp.me/"}
     quote={"Mazettna -  application pour chercher votre terre ou materiele"}
     hashtag="#Mazettna"
     
   >
    <FacebookIcon size={25} />
   </FacebookShareButton >
   <TwitterShareButton
     url={"http://localhost:3000/detailleannoce/"}
     title={"Mazettna -  application pour chercher votre terre ou materiele"}
     hashtag="#Mazettna"
  
   >
  <TwitterIcon size={30} round={true} />
   </TwitterShareButton>
   <WhatsappShareButton
     url={"http://localhost:3000/detailleannoce/"}
     title={"Mazettna - application pour chercher votre terre ou materiele"}
     separator=":: "
  
   >
       <WhatsappIcon size={30} round={true} />

   </WhatsappShareButton>
  </div>
 </div>
  )};
}
export default Poppers;