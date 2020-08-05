import React, { Component } from 'react'
import {Getanonces} from '../../../action/Annonce'
import TableComponent from './tableannoce'
import Sidebar from '../../compossant/Slidebar'
import { connect } from "react-redux";
 class Annonceconetenair  extends Component {
    componentDidMount(){
this.props.Getanonces()
}
    render() {
        return (
            <div className="flexflex">
                 <Sidebar></Sidebar>
                 <div style={{ padding: 30 }}>
                <TableComponent/>
                </div>
            </div>
        )
    }
}

export default connect(null ,{Getanonces})(Annonceconetenair)