import React, { Component } from 'react'
import Mapfavoriteannonce from './Favorite'
import {showallfavoriteannonce} from '../../action/Annonce'
import {Sidebar} from '../../Components'
import {connect} from 'react-redux'
import ReactDOM from "react-dom";
import { Card, Pagination } from "antd";

class ListeFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 9
    };
  }
  handleChange = value => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 9
      });
    } else {
      this.setState({
        minValue: this.state.maxValue,
        maxValue: value * 9
      });
    }
  };
  render() {
    let data = [
      { title: "Card title1", value: "Card content1" },
      { title: "Card title2", value: "Card content2" },
      { title: "Card title3", value: "Card content3" },
      { title: "Card title4", value: "Card content4" },
      { title: "Card title5", value: "Card content5" },
      { title: "Card title6", value: "Card content6" },
      { title: "Card title7", value: "Card content7" },
      { title: "Card title8", value: "Card content8" },
      { title: "Card title9", value: "Card content9" },
      { title: "Card title10", value: "Card content10" },
      { title: "Card title11", value: "Card content11" },
      { title: "Card title12", value: "Card content12" },
      { title: "Card title13", value: "Card content13" },
      { title: "Card title14", value: "Card content14" },
      { title: "Card title15", value: "Card content15" }
    ];
    return (
      <div>
        {data &&
          data.length > 0 &&
          data.slice(this.state.minValue, this.state.maxValue).map(val => (
           <>
            <Mapfavoriteannonce favorite={val} /> 
          
              <p>{val.value}</p>
              </>
        
          ))}
        <Pagination
          defaultCurrent={1}
          defaultPageSize={9}
          onChange={this.handleChange}
          total={15}
        />
      </div>
    );
  }
}



/*
     componentDidMount(){
        this.props.showallfavoriteannonce()
     }
    render() {
        return (
          <div className="flexflex"> 
              <Sidebar/>
        
            <div  style={{ padding: 30 }}> 
            <h5>liste favorite</h5>

              { this.props.favorite.map(favorite => <Mapfavoriteannonce favorite={favorite} /> ) }
            </div>
            </div>
        )
    }
}
*/
const mapstatetoprops = (state) => ({
    favorite : state.favorite
   })
   const mapdispatchtoprops = (disptach) => ({
    showallfavoriteannonce : () => disptach(showallfavoriteannonce())
  
  })
export default connect (mapstatetoprops,mapdispatchtoprops)(ListeFavorite)