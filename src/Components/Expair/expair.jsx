import React, { Component } from 'react'
import Sidebar from '../compossant/Slidebar'
import Tableexpaire  from './tabexpair'
import { connect } from "react-redux";
import {Getpartenair } from '../../action/Expair'
 class Expair extends Component {
     componentDidMount(){
         this.props.Getpartenair()
     }
    render() {
        return (
            <div>
                <div className="flexflex">
                 <Sidebar></Sidebar>
                 <div style={{ padding: 30 }}>
                <Tableexpaire/>
                </div>
            </div>
            </div>
        )
    }
}

export default connect (null , {Getpartenair})(Expair)