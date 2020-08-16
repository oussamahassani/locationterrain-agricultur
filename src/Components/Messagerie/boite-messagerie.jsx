import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getmessages} from '../../action/messagerie'
import Axios from 'axios';
import Inbox from "./inbox";
/*
 class BoiteMessagerie extends Component {
	componentDidMount(){
		this.props.getmessages(this.props.match.params.id)
	}
    render() {
        return (
			<div id="frame">
	<div id="sidepanel">
		<div id="profile">
			<div class="wrap">
				<p>Mike Ross</p>o
			</div>
		</div>
		<div id="search">
			<label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
			<input type="text" placeholder="Search contacts..." />
		</div>
		
	</div>
	<div class="content">
		<div class="messages">
			<ul>
				<li class="sent">
					<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
				</li>
				<li class="replies">
					<p>When you're backed against the wall, break the god damn thing down.</p>
				</li>
				{this.props.message?this.props.message.map(message => <>
					<li class="replies">
					<p>{message.from}</p>
					<p>{message.to}</p>
					<p>{message.message}</p>
					</li>

				</>)
				 : "non"}
			</ul>
		</div>
		<div class="message-input">
			<div class="wrap">
			<input type="text" placeholder="Write your message..." />
			<i class="fa fa-paperclip attachment" aria-hidden="true"></i>
			<button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</div>
           
        )
    }
}
*/


// Render




export default function BoiteMessagerie(props) {
  return (
    <div>
      <div className="container">
        <Inbox id ={props.match.params.id} />
      </div>
    </div>
  );
}


// Helper methods


const mapstatetoprops = (state) => ({
	message : state.message
})
const mapdispatchtoprops = (disptach) => ({
	getmessages : (id) => disptach(getmessages(id)),
 

})
	
