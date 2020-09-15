import React, { Component } from 'react'
import {Getanonces} from '../../../action/Annonce'
import MesannonceTableComponent from './Mesannoce'
import Sidebar from '../../compossant/Slidebar'
import { connect } from "react-redux";
 class AnnonceconetenairProretaire  extends Component {
    componentDidMount(){
this.props.Getanonces()

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

export default connect(null ,{Getanonces})(AnnonceconetenairProretaire)