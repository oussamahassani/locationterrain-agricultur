import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Getalluser} from '../../action/Personne'
import Sidebar from '../compossant/Slidebar'
import Useritem from './useritems'
export class GestionUser extends Component  {
   
    componentDidMount() {
       this.props.Getalluser()
    }
state= {
    filter : []
}
   recherche(){
 
  this.setState({filter : this.props.personne.filter(el=> el.Nom ==this.state.recherche || el.email ==this.state.recherche )})
   }
   onchange(e){
       const recherche = e.target.value
    this.setState({recherche:recherche})
   }
      
      
    render() {
       
    return (
        <div>
               <div className="flexflex">
          <Sidebar />
          <>
       
   <div className="container" style={{ padding: 30 }}>
   <h3>Gestion des users</h3>
   <div className="row">
    
  </div>
  <div className="ui input">
  <input type="text" placeholder="name,email" onChange={(e) => this.onchange(e)}></input><button className="btn btn-outline-success btn-sm" onClick={() => this.recherche()}>Recherche</button>
     </div><br/>
       <table className="ui celled striped table">
           <thead>
               <tr><th   className="bagroundcolorred" colspan="7">
                  Liste User
                   </th>
                   </tr>
                   <tr><th>id User</th><th>Nom</th><th>Prenom</th><th>Email</th> <th>Status</th><th>Action</th></tr>
               </thead>
           <tbody>
            {this.state.filter.length>0?this.state.filter.map(el=><Useritem  donner={el}/>)  : this.props.personne.map(el => <Useritem  donner={el}/> ) 
            
         
            }
           </tbody>
       </table>
       <div className="col-xs-12 box_pagination_info text-right">
  <p>
  
  </p>
   </div>
   <div className="col-xs-12 dispalyflexbettwen">

  
  </div>

   </div>
 
   </>
   </div>

        </div>
    )}
}

const mapStateToProps = (state) => ({
    personne : state.personne
})

const mapDispatchToProps = (dispatch) => ({
    Getalluser: () => dispatch(Getalluser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GestionUser)
