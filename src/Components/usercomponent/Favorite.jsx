import React ,  {Component} from 'react'

import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { render } from 'react-dom';



export default class Mapfavoriteannonce extends Component {
  constructor(props) {
    super(props)
    this.myRef1 = React.createRef();
  }


    hidemovie  = (e) => {
     
        
        let a =  e.target;
           a.style.display="none"
		  this.myRef1.current.style="display : none"
           e.preventDefault()
        
    }
   
    render(){
    return (
      <Card ref={this.myRef1}  className ="cardliste">
      <CardHeader>Header</CardHeader>
      <CardBody>
      <p onClick={this.hidemovie} style={{float:"right"}} >❌</p>
        <CardTitle><h3 className="text-centre clor">Num annonce:{this.props.favorite.idannonce
} </h3></CardTitle>
        <div className="cardfavorite" >
     
      	<div className="c" id="c">
	
		<div className="panel-heading flex-bettwen">
		 
<img src={"image/"+this.props.favorite.image} width="200px" alt="filmimage"></img>
		</div>
		<div className="panel-body" >
			<p className=" descriptionfavorite   ">Description: {this.props.favorite.description}</p>
		</div>
<CardText>Adresse: {this.props.favorite.province}  {" "}  - {this.props.favorite.city} {" "} {this.props.favorite.postalCode}  {this.props.favorite.street}</CardText> 
<h6>Information Utilisateur </h6>
<p>Nom et Prenom : {this.props.favorite.nomuser} {" "} {this.props.favorite.prenomuser} </p>
<p> Num telephone: {this.props.favorite.numtel
} </p>
	</div>

        </div>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
   
    )
}
}