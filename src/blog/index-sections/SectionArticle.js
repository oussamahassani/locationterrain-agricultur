
import React from "react";



function SectionCarousel() {

  return (
    <>
      <div class="container">

        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              <span class="ion-minus"></span>Blog Posts<span class="ion-minus"></span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus Débuter un potager est une étape fascinante dans la vie d'un jardinier </p><br />
          </div>
        </div>

        <div class="row">

          <div id="slider" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#slider" data-slide-to="0" class="active"></li>
              <li data-target="#slider" data-slide-to="1"></li>
            </ol>



            <div class="carousel-inner">

              <div class="item active">
                <div class="row">

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 heigthcard">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/piment-espelette-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">Le piment d'Espelette</h4>
                        <p class="card-text">Si aujourd’hui, le Piment d’Espelette s’impose comme le symbole d’une région, il est également reconnu comme une épice d’exception en TUNISIE et à l’étranger est une étape fascinante </p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="https://www.aujardin.info/fiches/piment-espelette.php">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 heigthcard">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/salvia-officinalis-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">Les meilleures plantes pour les tisanes</h4>
                        <p class="card-text">La nature nous offre matière à soigner nos petits maux quotidiens grâce aux plantes. Apprenons à mieux les connaître pour les utiliser à bon escient.</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="https://www.aujardin.info/fiches/meilleures-plantes-pour-tisanes.php">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 heigthcard">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/zingiber-officinale-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">
                          Les plantes aphrodisiaques</h4>
                        <p class="card-text">Depuis des temps immémoriaux, les plantes sont nos alliées pour traiter les troubles les plus divers. La sexualité n'est pas en reste grâce aux pouvoirs des plantes</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="https://www.aujardin.info/fiches/plantes-aphrodisiaques.php">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 heigthcard">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/crocus-sativus-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">
                          La culture du safran</h4>
                        <p class="card-text">
                          La culture du safran , Le safran est issu d'une plante que les jardiniers connaissent bien et qui n'est autre que le Crocus..est une étape fascinante dans la vie d'un jardinier</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="">Lire +</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="item">
                <div class="row">

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 heigthcard">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/mini-citrouilles-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">
                          Cultiver les mini légumes</h4>
                        <p class="card-text">En pots sur un balcon, dans un potager en carré ou sur des meubles de culture, les petits légumes.</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="https://www.aujardin.info/fiches/cultiver-mini-legumes.php">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/raphanus-sativus-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">Cultiver les radis avec la lune</h4>
                        <p class="card-text">Il existe de nombreuses variétés de radis présentant des formes et des couleurs diverses,Quant à l'influence de la lune.</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="https://www.aujardin.info/fiches/cultiver-radis-avec-lune.php">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/plantes-amies-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">
                          Les plantes amies</h4>
                        <p class="card-text">Vous ne le savez peut être pas mais les plantes ont une influence les unes sur les autres. Ce constat est très intéressant dans le domaine du jardinage biologique</p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="#">Lire +</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="card text-center heigthcarddetail">
                      <img class="card-img-top" src={require("../../assest/img/ail-bocaux-600x450.webp")} alt="" width="100%" />
                      <div class="card-block">
                        <h4 class="card-title">
                          Conserver les légumes en bocaux</h4>
                        <p class="card-text">L'été, les récoltes souvent abondent au potager et il est difficile de tout consommer. Une bonne solution consiste à conserver sa production </p>
                        <a class="btn btn-default bloglirplus" target="_blank" href="">Lire+</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default SectionCarousel;
