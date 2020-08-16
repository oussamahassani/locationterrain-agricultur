import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Getalluser} from '../../action/Personne'
import Sidebar from '../compossant/Slidebar'
import Useritem from './useritems'
export class GestionUser extends Component  {
   
    componentDidMount() {
        this.props.Getalluser()
    }

   recherche(){
   
  
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
  <input type="text" placeholder="name,email,role ou poste  ocuper" onChange={(e) => this.onchange(e)}></input><button className="ui inverted primary button colorwhitee" onClick={() => this.recherche()}>Recherche</button>
     </div>
       <table className="ui celled striped table">
           <thead>
               <tr><th   className="bagroundcolorred" colspan="7">
                  Liste User
                   </th>
                   </tr>
                   <tr><th>id User</th><th>Nom</th><th>Prenom</th><th>Email</th> <th>Status</th><th>Action</th></tr>
               </thead>
           <tbody>
            {  this.props.personne.map(el => <Useritem  donner={el}/> ) 
            
         
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
