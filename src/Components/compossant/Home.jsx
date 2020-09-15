import React, { Component } from "react";
import ContactUs from './ContactUs'
import AboutMe from './AboutMe'
import DernierProduit from '../market-place/dernierProduit'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Partenair from '../Expair/nospartenair'
import Allannonce from '../maps/MultiMap'
class Home extends Component {
  render() {
    return (
      <div >
      <div id="carouselExampleIndicators" class="carousel slide"  data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100"   style = {{ filter: 'invert(30%)'}} src="image/hero11.jpg" alt="First slide" height="400px"/>
      <div class="carousel-caption d-none d-md-block">
      <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1> Location et vendre des terres et materiel agriculture</h1>
              <p className="mb-5">
              Acheter et location des biens agriculture

 Mazretna Group aimerait établir une relation durable avec vous et répondre à tous vos besoins et rêves agriculture, maintenant et à l'avenir.
              </p>
            </div>
          </div>
        </div>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 "  style = {{ filter: 'invert(30%)'}}  src="image/hero22.jpg" alt="Second slide" height="400px"/>
      <div class="carousel-caption d-none d-md-block">
      <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1> Location et vendre des terres et materiel agriculture</h1>
              <p className="mb-5">
              Acheter et location des biens agriculture

 Mazretna Group aimerait établir une relation durable avec vous et répondre à tous vos besoins et rêves agriculture, maintenant et à l'avenir.
              </p>
            </div>
          </div>
        </div>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style = {{ filter: 'invert(30%)'}}  src="image/hero33.jpg" alt="Third slide" height="400px"/>
      <div class="carousel-caption d-none d-md-block">
      <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1> Location et vendre des terres et materiel agriculture</h1>
              <p className="mb-5">
              Acheter et location des biens agriculture

 Mazretna Group aimerait établir une relation durable avec vous et répondre à tous vos besoins et rêves agriculture, maintenant et à l'avenir.
              </p>
            </div>
          </div>
        </div>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="container">
<br></br>
<AboutMe/>
<br></br>
<h3 className="titrepargrape">Nous fait confience</h3>
<OwlCarousel
    className="owl-theme"
    loop={true}
    autoplay={true}
    margin={10}
    nav
>
    <div class="item"><img class="d-block w-100"  src="image/fournisseur1.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"  src="image/fournisseur2.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"   src="image/fournisseur3.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"  src="image/fournisseur4.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"   src="image/fournisseur5.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"   src="image/fournisseur6.png" alt="Third slide" height="100px"/></div>
    <div class="item"><img class="d-block w-100"   src="image/fournisseur7.png" alt="Third slide" height="100px"/></div>
    
</OwlCarousel>
<br></br>

<Allannonce/>
<br></br>
<DernierProduit/>
<br></br>
</div>
<Partenair/>
<br/><br/>
<ContactUs/>

</div>
   )
  }
}
{/*
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: "url(image/hero1.jpg)" }}
        data-aos="fade"
        id="home-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 mt-lg-5 text-center">
              <h1> Location et vendre des terres et materiel agriculture</h1>
              <p className="mb-5">
              Acheter et location des biens agriculture

 Mazretna Group aimerait établir une relation durable avec vous et répondre à tous vos besoins et rêves agriculture, maintenant et à l'avenir.
              </p>
            </div>
          </div>
        </div>
      </div>
*/}
 

export default Home;
