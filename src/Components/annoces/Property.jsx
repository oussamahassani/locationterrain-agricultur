import React, { Component } from "react";

class Property extends Component {
  render() {
    return (
      <>
        <div className="padding-allannonce">
        <div className="col-4" style={{ paddingTop: "20px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={"image/" + this.props.el.image} className="card-img-top" alt="..."   width="150px" height="150px"/>
            <div className="card-body">
              <h5 className="card-title">DT {this.props.el.price}</h5>
              <ul
                className="list-group list-group-flush"
                style={{ paddingBottom: "20px" }}
              >
                <li className="list-group-item">Surface: {this.props.el.espace}</li>
                
                <li className="list-group-item"  width="150px" height="150px">
                  Address: {this.props.el.houseNumber} {this.props.el.street} {this.props.el.city} {this.props.el.province} {this.props.el.postalCode}
                </li>
              </ul>

              <a href={`detailleannoce/${this.props.el._id}/${this.props.el.idcreateur}`} className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Property;
