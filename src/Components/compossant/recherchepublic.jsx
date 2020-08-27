import React ,{Component}  from 'react'

export default class Recherche extends Component {
  state = {
    espace : "",
    prix : "",
    ville  : ""
  }
  change =(event) => {
   let name = event.target.name
    this.setState({[name]: event.target.value});
}
  render(){
    return (
        <div>
            <div>
    <br/>
<section>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="image/ag11.jpg" height="350px" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="image/ag22.jpg" height="350px"  className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="image/ag33.jpg"  height="350px" className="d-block w-100" alt="..."/>
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
 
                            <input type="text" className="form-control search-slt" placeholder="Prix " name="prix"  onChange = {this.change}/>
                        </div>
                      {/* <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="espace" name="espace" onChange = {this.change}/>
                        </div>   */}
 
                        <select className="col-lg-3" onChange = {this.change}  name="espace" onChange={this.change} value={this.state.espace}>
	<option selected="selected" value="">Espace</option>
	<option value="500"> 500  m² =&#x3E;</option>
	<option value="1500"> 1500 m² =&#x3E;</option>
	<option value="3000">3000 m² =&#x3E; </option>
	<option value="5000">5000 m² =&#x3E; </option>
	<option value="5000">  5000 m² =&#x3E;</option>


</select>
                        <select name="DropDownList_City"   name="ville" onChange={this.change} value={this.state.ville}>
	<option selected="selected" value="">Ville</option>
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
                            <button type="button" className="btn btn-danger wrn-btn" onClick={() => this.props.rechercheannonce(this.state.espace,this.state.prix,this.state.ville)}>Rechercher</button>
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