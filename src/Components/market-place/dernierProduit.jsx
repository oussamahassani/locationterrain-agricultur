import React, { Component } from 'react'
import  ModalProduit from './ModalProduit'
import {getallproduitss} from '../../action/Produit'
import {postnewproducttopannier} from '../../action/pannier'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import swal from 'sweetalert'
 class DernierProduit extends Component {
     componentDidMount(){
        this.props.getallproduitss()
     }
     sendtocard = (produit) => {
         if(Cookies.get("_id")){

         
const iduser = Cookies.get("_id")
const obj = {
    Titel : produit.Titel ,
    Prix : produit.Prix ,
    Description :produit.Description ,
    image : produit.image ,
    iduser :iduser ,
}
  
console.log("addtopannier",obj)
    this.props.postnewproducttopannier(obj)
     }
     else
     swal("Vous pouvez connectez pour ajouter au pannier")
    }
    render() {
        return (
            <div>
            <div class="container">
    <h3 className="title-container">Nos Produit</h3>
    <div className="d-flex flex-wrap">
    {this.props.Produit.reverse().slice(0,3).map ( (produit,index) => 
    <div  key={index}>
        <div class="col">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src={"./image/" + produit.image} />
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{produit.Titel}</a></h3>
                    <div class={produit.Discount > 0 ?"price" : "pasdesold"}> {produit.Discount > 0 ? Number(produit.Prix) - Number(produit.Discount) +"$": "" }
                        <span>{produit.Prix} $</span>
                    </div>
                </div>
                <ul class="social">
                    <li><ModalProduit Produit={produit}/></li>
                     
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a  data-tip="Add to card"  onClick={() => this.sendtocard(produit)}><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
       
       
    </div>
    )}
</div>
</div>
            </div>
        )
    }
}
const mapstatetoprops = (state) => ({
    Produit : state.Produit
   })
   const mapdispatchtoprops = (disptach) => ({
getallproduitss : () => disptach(getallproduitss()) ,
postnewproducttopannier : (el) => disptach(postnewproducttopannier(el))
   
    
   
   })
export default connect (mapstatetoprops,mapdispatchtoprops)(DernierProduit)