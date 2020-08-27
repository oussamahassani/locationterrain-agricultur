import React, { Component } from 'react'
import {getallproduitss} from '../../action/Produit'
import MesannonceTableComponent from './tabproduit'
import Sidebar from '../compossant/Slidebar'
import { connect } from "react-redux";
 class Produitcontenaire  extends Component {
    componentDidMount(){
this.props.getallproduitss()
console.log("ok", this.props.getallproduitss())
}
    render() {
        return (
            <div className="flexflex">
                 <Sidebar></Sidebar>
                 <div style={{ padding: 30 }}>
                <MesannonceTableComponent/>
                </div>
            </div>
        )
    }
}

export default connect(null ,{getallproduitss})(Produitcontenaire)