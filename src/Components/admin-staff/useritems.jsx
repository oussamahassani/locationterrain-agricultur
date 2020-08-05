import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../action/Personne'
import { NavLink } from 'react-router-dom';
import Modals from '../compossant/modal'
class Useritem extends Component {
  state = {
    changetype: true,
    show: false
  }

  render() {
    const { donner} = this.props;
    return (

      <>
        <tr>
          <td width="7%"> 👱 id- {donner.Iduser} </td>
          <td class="collapsing" width="8%">
            {donner.Nom}
          </td>
          <td width="10%"> {donner.Prenom}</td>
          <td width="20%" > ✉  {donner.email}</td>
          <td width="5%"> {donner.status }</td>
          <td width="20%"> <div className="flex-bettwen"> {donner.status =="enabel" ? <button  onClick={() => deleteUser(donner._id,'inactive')} className="btn btn-outline-danger"><i class="fa fa-trash" aria-hidden="true"></i>
</button>:<span>user delated</span>}
           <Modals donner={donner} /> </div></td>
        </tr>



     
            

      </>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  
  deleteUser : (iduser,status) => dispatch(deleteUser(iduser,status))

})

export default connect(mapStateToProps, mapDispatchToProps)(Useritem)