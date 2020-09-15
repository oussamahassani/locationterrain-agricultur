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
      <CardHeader><button onClick={this.hidemovie} className="cardfavoriteuser" >❌</button>
        <CardTitle><img src={"image/"+this.props.favorite.image} width="400px" alt="filmimage"></img></CardTitle></CardHeader>
      <CardBody>
      
        <div className="cardfavorite" >
		<div className="panel-body" >
			<p className=" descriptionfavorite   "><i><u>Description:</u></i> {this.props.favorite.description}</p>
		</div>
<CardText><i><u>Adresse: </u></i>{this.props.favorite.province}  {" "}  - {this.props.favorite.city} {" "} {this.props.favorite.postalCode}  {this.props.favorite.street}</CardText> 
<h5>Information Utilisateur </h5>
<p><i><u>Nom et Prenom :</u></i> {this.props.favorite.nomuser} {" "} {this.props.favorite.prenomuser} </p>
<p><i><u>Num telephone: </u></i>{this.props.favorite.numtel
} </p>
<p><i><u>Email:</u></i>{this.props.favorite.emailuser}</p>


        </div>
      </CardBody>
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