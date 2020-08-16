import React, { Component } from "react";
import {login} from '../../action/Personne'
import {connect} from 'react-redux'
import { NavLink} from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleUsernameChange = event => {;
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = async evt => {
    evt.preventDefault();
    evt.target.className += " was-validated";
    let regx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]+$/
    if (regx.test(this.state.email) && this.state.password)
      this.props.login(this.state.email,this.state.password)

  //  this.props.history.push('/admin');
  
   
    // let data = new FormData();
    // data.append("username", this.state.username);
    // data.append("password", this.state.password);
    // let response = await fetch("/login", {
    //   method: "POST",
    //   body: data,
    //   credentials: "include"
    // });
    // let responseBody = await response.text();
    // console.log("responseBody from login", responseBody);
    // let body = JSON.parse(responseBody);
    // console.log("parsed body", body);
    // if (!body.success) {
    //   alert("login failed");
    //   return;
    // }

  
      //this.props.history.push("/admin")
  


  };
  render = () => {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   Username
      //   <input type="text" onChange={this.handleUsernameChange} />
      //   Password
      //   <input type="password" onChange={this.handlePasswordChange} />
      //   <input type="submit" />
      // </form>
      <div className="container mb-3" style={{ paddingTop: "20px" }}>
        <div className="row justify-content-md-center">
          <div className="col-6">
            <div className="card">
              <h5
                className="card-title text-center"
                style={{ paddingTop: "20px" }}
              >
                LOGIN
              </h5>
              <div className="card-body">
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.handleUsernameChange}
                      required
                    />
                     <div class="invalid-feedback">
                                           Merci de choisir un email valide.
                                            </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={this.handlePasswordChange}
                      required
                    />
                     <div class="invalid-feedback">
                      Merci de tapper votre mot de passe
                    </div>
                  </div>
                  <div className="w-50 centreblock">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  </div>
                </form>
                <p>Vous naver pas de compte <NavLink to ="/cree-compte" >vous pouvez inscrire ici </NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
const mapstatetoprops = (state) => ({
  
})
const mapdispatchtoprops = (disptach) => ({
  login : (email,pass) => disptach(login(email,pass)),
})

export default connect(mapstatetoprops,mapdispatchtoprops)(Login) ;
