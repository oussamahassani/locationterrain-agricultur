import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {Sidebar} from '../../Components'
import Recherche from '../compossant/recherche'
import Cookies from 'js-cookie'
import {Getanonces,delateannocee} from '../../action/Annonce'
class Admin extends Component {
  state = {
    properties: [],
   isOpened :false
  };

  componentDidMount() {
    this.props.Getanonces()
  }
  onDelete = (id) => {
    console.log(id);
    this.props.delat00eannoce(id)


  };
  updateannoce(id){
    this.props.history.push("/UpdateAnnonce/"+id)
  }

  render() {
    return (
      <div className="flexflex">
        <Sidebar show={this.state.isOpened} setIsOpened={this.setState}/>
        <div className="main"  style={{ padding: 30 }} >
        {Cookies.get("typeuser") !=="demandeur" ? <>
        <div>
        
          <button type="button" className="btn btn-primary">
            <Link to="/createListing" style={{ color: "white" }}>
             Ajouter Annonce
            </Link>
          </button>
          <Recherche/>
        </div>
        <div style={{ paddingTop: 20 }}>
          {this.props.annoce.length < 1 ? (
            "There are no listings"
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Espace</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">altitude</th>
                  <th scope="col">Address</th>
                  <th scope="col">Description</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {this.props.annoce.map(property => {
                  return (
                    <tr key={property._id}>
                      <td>
                        <img
                          src={"image/" + property.image}
                          alt=""
                          className="img-thumbnail"
                          style={{ width: 100, height: 100 }}
                        />
                      </td>
                      <td>{property.price}</td>
                      <td>{property.espace}</td>
                      <td>{property.longitude}</td>
                      <td>{property.altitude} </td>
                      <td>
                        {property.province} {property.street} {property.city}{" "}
                        {property.postalCode}
                      </td>
                      <td>{property.description}</td>
                      <td>
                  {Cookies.get("typeuser") =="proprietaire" ?     <button
                          type="button"
                          className="btn btn-warning"
                          style={{ width: 80 }}
                          onClick= {() => this.updateannoce(property._id)}
                        >
                          Edit
                        </button> : null }

                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => this.onDelete(property._id)}
                          style={{ width: 80 }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div> </>:<p>ok</p> }


        </div>
      </div>
    );
  }
}
const mapstatetoprops = (state) => ({
  annoce : state.annonce
 })
 const mapdispatchtoprops = (disptach) => ({
   Getanonces : () => disptach(Getanonces()),
   delateannoce : (id) => disptach(delateannocee(id))
 
 })
export default connect(mapstatetoprops,mapdispatchtoprops)(Admin)


