import React, { Component } from 'react'
import Mapfavoriteannonce from './Favorite'
import {showallfavoriteannonce} from '../../action/Annonce'
import {getmessages} from '../../action/messagerie'
import {Sidebar} from '../../Components'
import {connect} from 'react-redux'

import  Pagination  from "../compossant/pagination";
import Cookies from 'js-cookie'

class ListeFavorite extends Component {
  state = {
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
    input:"",
    favorite : []
    
}
componentDidMount(){

 this.props.showallfavoriteannonce()
  this.props.getmessages(Cookies.get("_id"))



}
static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.favorite!== prevState.favorite ){
    //Perform some operation
    return { favorite: nextProps.favorite };
  }
  else return null; // Triggers no change in the state
}
  showannonce = (rowsPerPage) => {
   let result = null;
          if (rowsPerPage.length > 0)
      result = rowsPerPage.filter(el => el.Utilisateur == Cookies.get("_id") ).map((el, i) => {
        return   <Mapfavoriteannonce favorite={el}  key={i}  />
       
      });
    
    return result;
  };
onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };
  
  render() {
   
    let  {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
  } = this.state;

  let rowsPerPage = [];
  rowsPerPage = this.state.favorite.slice(startIndex,endIndex + 1);
    return (
      <div className="flexflex"> <Sidebar message = {this.props.message ? this.props.message.filter(el => !el.read  && !el.deleted ).length : null}/>
      <div className="container">
        <br/>
        <h4 >Liste favorite</h4>
        <div className="flexflex">

       {      this.showannonce(rowsPerPage)          }
       </div>
          <div className="col-xs-12 dispalyflexbettwen">
          <Pagination
            totalRecords={ this.props.favorite.length}
            pageLimit={pageLimit || 4}
            initialPage={1}
            pagesToShow={5}
            onChangePage={this.onChangePage}
          />
        
        </div>
          <div>
            </div>
            

        
          </div>
      </div>
    );
  }
}



/*
 <Pagination
          defaultCurrent={1}
          defaultPageSize={9}
          onChange={this.handleChange}
          total={15}
        />
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
    favorite : state.favorite,
    message : state.message
   })
   const mapdispatchtoprops = (disptach) => ({
    showallfavoriteannonce : () => disptach(showallfavoriteannonce()),
    getmessages :(id) => disptach(getmessages(id))
  
  })
export default connect (mapstatetoprops,mapdispatchtoprops)(ListeFavorite)
