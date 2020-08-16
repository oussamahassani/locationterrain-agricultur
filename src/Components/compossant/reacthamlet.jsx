import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";  
 export default function  HelmetMetaData(props) {  
     let location = useLocation();
   let currentUrl = "http://localhost:3000/allListings" + location.pathname;
   let quote = props.quote !== undefined ? props.quote : "";
   let title = props.title !== undefined ? props.title : "";
   let image = props.image !== undefined ? props.image : "http://localhost:3000/static/media/logo.cc3c467c.png";
   let description = props.description !== undefined ? props.description  : "Mazetna est une application pour  Acheter et location des biens agriculture Mazretna Group aimerait établir une relation durable avec vous et répondre à tous vos besoins et rêves agriculture, maintenant et à l'avenir."; 
     let hashtag = props.hashtag !== undefined ? props.hashtag : "#Mazettna";return ( <Helmet>
     <title>{title}</title>
     <meta charset="utf-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="csrf_token" content="" />
     <meta property="type" content="website" />
     <meta property="url" content={currentUrl} />
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
     <meta name="msapplication-TileColor" content="#ffffff" />
     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
     <meta name="theme-color" content="#ffffff" />
     <meta name="_token" content="" />
     <meta property="title" content={title} />
     <meta property="quote" content={quote} />
     <meta name="description" content={description} />
     <meta property="image" content={image} />
     <meta property="og:locale" content="fr_FR" />
     <meta property="og:type" content="website" />
     <meta property="og:title" content={title} />
     <meta property="og:quote" content={quote} />
     <meta property="og:hashtag" content={hashtag} />
     <meta property="og:image" content={image} />
     <meta content="image/*" property="og:image:type" />
     <meta property="og:url" content={currentUrl} />
     <meta property="og:site_name" content="Mazettnaa" />
     <meta property="og:description" content={description} />    </Helmet>
);
   }
