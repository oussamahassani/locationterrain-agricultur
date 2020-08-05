import React, { Component } from "react";

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
      <img class="d-block w-100"   style = {{ filter: 'invert(40%)'}} src="image/hero1.jpg" alt="First slide"/>
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
      <img class="d-block w-100 site-blocks-cover overla"  style = {{ filter: 'invert(40%)'}}  src="image/hero2.jpeg" alt="Second slide"/>
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
      <img class="d-block w-100" style = {{ filter: 'invert(40%)'}}  src="image/hero3.jpg" alt="Third slide"/>
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
