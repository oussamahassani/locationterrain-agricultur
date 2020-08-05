import React ,{Component}  from 'react'
let espace = ""
let prix = ""
export default class Recherche extends Component {
 
  render(){
    return (
        <div>
            <div>
    <br/>
	{ /*<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                 
                                    </div>
                                
                                    <div class="col">
                                 

                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Nom annonce  Adreesse" onChange = {(e) => contenu= e.target.value} />
                                    </div>
                                
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" onClick={() => this.props.rechercheannonce(contenu)}>Rechercher    <i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                               
                                </div>
                         </div>
                        </div>
                 
    </div> */}
<section>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="image/ag1.jpg" height="350px" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="image/ag2.jpg" height="350px"  className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="image/ag3.jpg"  height="350px" className="d-block w-100" alt="..."/>
            </div>
          
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</section>
<section className="search-sec">
    <div className="container">
        <form action="#" method="post" noValidate="novalidate">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="prix " onChange = {(e) => prix= e.target.value}/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="espace" onChange = {(e) => espace= e.target.value}/>
                        </div>
                        <select name="DropDownList_City"   name="province" onChange={this.handleChange}>
	<option selected="selected" value="">ville</option>
	<option value="Beja">Beja</option>
	<option value="Bizerte">Bizerte</option>
	<option value="El Kef">El Kef</option>
	<option value="Gafsa">Gafsa</option>
	<option value="Gammarth">Gammarth - Côtes de Carthage</option>
	<option value="Kelibia">Kelibia</option>
	<option value="Korba">Korba</option>
	<option value="Les Berges du Lac">Les Berges du Lac</option>
	<option value="Matmata">Matmata</option>
	<option value="Medenine">Medenine</option>
	<option value="Sbeitla">Sbeitla</option>
	<option value="Carthage">Carthage</option>
	<option value="Djerba">Djerba</option>
	<option value="Douz">Douz</option>
	<option value="Hammamet">Hammamet</option>
	<option value="Kairouan">Kairouan</option>
	<option value="Mahdia">Mahdia</option>
	<option value="Monastir">Monastir</option>
	<option value="Nabeul">Nabeul</option>
	<option value="Sfax">Sfax</option>
	<option value="Sousse">Sousse</option>
	<option value="Tabarka">Tabarka</option>
	<option value="Tataouine">Tataouine</option>
	<option value="Tozeur">Tozeur</option>
	<option value="Tunis">Tunis</option>
	<option value="Zarzis">Zarzis</option>

</select>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" className="btn btn-danger wrn-btn" onClick={() => this.props.rechercheannonce(espace,prix)}>Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
</div>
</div>
   

    )
}

}