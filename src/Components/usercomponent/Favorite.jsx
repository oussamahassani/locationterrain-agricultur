import React ,  {Component} from 'react'
import {connect} from 'react-redux'
import { Card ,CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
  import {deletefromfavorite} from '../../action/Annonce'


 class Mapfavoriteannonce extends Component {
  constructor(props) {
    super(props)
    this.annonce = React.createRef();
  }


    hidemovie  = (e) => {
     const id = this.annonce.current.id;
      this.props.deletefromfavorite(id)
        let a =  e.target;
           a.style.display="none"
    this.annonce.current.style="display : none"
 
           e.preventDefault()
        
    }
   
    render(){
    return (
      <div ref={this.annonce} id={this.props.favorite._id} className ="cardliste">
      <Card  >
      <CardHeader>Header</CardHeader>
      <CardBody>
      <button onClick={this.hidemovie} style={{float:"right"}} >❌</button>
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
    </div>
   
    )
}
}
const mapstatetoprops = (state) => ({

 })
 const mapdispatchtoprops = (disptach) => ({
  deletefromfavorite : (id) => disptach(deletefromfavorite(id)),


})
export default connect (mapstatetoprops,mapdispatchtoprops)(Mapfavoriteannonce)