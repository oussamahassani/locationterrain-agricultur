import React, { Component } from "react";
import {login} from '../../action/Personne'
import {connect} from 'react-redux'

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
      this.props.login(this.state.email,this.state.password)
      
  
   
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
      <div className="container" style={{ paddingTop: "20px" }}>
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
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={this.handleUsernameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
                <p>Vous naver pas de compte <a href ="/cree-compte" >vous pouvez inscrire ici </a></p>
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
