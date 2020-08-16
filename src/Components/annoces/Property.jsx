import React, { Component } from "react";
import {addtofavoriteannoce} from '../../action/Annonce'
import { NavLink} from 'react-router-dom';
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
class Property extends Component {
  sendtofavorite = () =>  {
    if (Cookies.get("typeuser") !== "demandeur")
    alert("vous navez pas autorizer d'ajouter cette annonce ")
    else {
    if(this.props.personne)
      this.props.addtofavoriteannoce([this.props.el],this.props.personne) 
        else
       alert("user")
    }
  }
  render() {
    return (
        <li class="basicList border-bottom border-top">
          <div className="flexflex">
			<div className="marginpage paddingpage rounded border border-success"  > 
        <button class="fa fa-heart-o hard-card btn" aria-hidden="true" title="ajouter au favorite" onClick={this.sendtofavorite}></button>
				<div class="photoMask">
					<img  src={"./image/"+this.props.el.image}  width="150px"/>
				</div>
			</div>
			<div class="col-8_5 contBasicBox w-100" >
        <br/>   <br/> 
				<div class="colorprincipale"> <h5>{this.props.el.price} DT</h5>
				</div>
				<h5 class="premiumH2">{this.props.el.typelocation} – {this.props.el.typebien} à {this.props.el.province}
				</h5>
				<p class="basicP basicData">{this.props.el.espace} m²</p>
				<p class="basicP basicData"> <i class="fa fa-map-marker" aria-hidden="true"></i>  {" "}
 {this.props.el.province} à  {" "}
   					{this.props.el.city}</p>
				<p class="basicP descLi"  style={{width : "800px"}}> {this.props.el.description}</p>
        <p className> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {" "}
 {this.props.el.datecreation.slice(0,10)}</p>
				<div>
        <NavLink  to={`detailleannoce/${this.props.el._id}/${this.props.el.idcreateur}`} className="btn float-right  btn btn-outline-secondary"> 
              <i class="fa fa-info-circle" aria-hidden="true"></i> {" "}
              Plus de detaile
              </NavLink>
					
				</div>
	</div>
  </div>
		</li>
    
         

    );
  }
}
const mapdispatchtoprops = (disptach) => ({
   addtofavoriteannoce:(annonce,personne) => disptach (addtofavoriteannoce(annonce,personne)),

 
 })

  export default  connect (null,mapdispatchtoprops) (Property) ;
 {/*
        <div className="col-4" style={{ paddingTop: "20px" }}>
          <div className="card" style={{ width: "18rem" }}>
            
            <div className="card-body">
              <h5 className="card-title"> {this.props.el.price} DT</h5>
              <ul
                className="list-group list-group-flush"
                style={{ paddingBottom: "20px" }}
              >
                <li className="list-group-item">Surface: {this.props.el.espace}</li>
                
                <li className="list-group-item"  width="150px" height="150px">
                  Address: {this.props.el.houseNumber} {this.props.el.street} {this.props.el.city} {this.props.el.province} {this.props.el.postalCode}
                </li>
              </ul>
             <div className="">
              <a href={`detailleannoce/${this.props.el._id}/${this.props.el.idcreateur}`} className="btn btn-primary btn btn-block"> 
              <i class="fa fa-info-circle" aria-hidden="true"></i> {" "}
             Details
              </a>
              </div>
            </div>
          </div>
        </div>
          */}
