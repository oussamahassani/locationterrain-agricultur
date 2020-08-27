import { combineReducers } from 'redux';
import {Annonce} from './Annoce';
import {Personnes} from './personne';
import {Favorite} from './favorite'
import {mailreducer} from './email'
import {boitemessage} from './message'
import {Produits} from './produit'

const allReducers = combineReducers({
  annonce : Annonce,
  personne : Personnes,
  favorite :Favorite,
  email : mailreducer,
  message : boitemessage,
  Produit : Produits,
  
});

export default allReducers;
