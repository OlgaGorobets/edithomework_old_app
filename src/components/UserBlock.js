import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import { signForm, signOutForm, signFB} from '../actions';

import UserModal from './UserModal';

const mapStateToProps = state => {
	return {
		current_user: state.current_user,
		users: state.users
	};
};


let UserBlock = connect(mapStateToProps)(({ current_user, users, dispatch }) => {
	let signModalObj = {
		signIn: true,
		signUp: false,
		fb: (response)=>{
			console.log("response", response.id);
			response.id && dispatch(signFB({
				id: response.id,
				name: response.name,
				pass: response.accessToken,
				photo: response.picture.data.url
			}));	
			
		},		
		title: "Login or Register",
		"button": {
			title: "Login or Register"
		},
		buttons: [{
			title: "Cancel"
		},{
			title: "Ok",
			func: function(fieldsData){
				dispatch(signForm(fieldsData));
			}
		}]
	};
	
	let userData = null;
	if(current_user.id !== null){
		let usersData = users.filter((us)=>{
			return us.id == current_user.id;
		});
		userData = usersData.length > 0 ? usersData[0] : null;
	}
	return(
	<ListGroup className="topUserBlock">
	{current_user.id == null ?
		<ListGroup.Item><UserModal {...signModalObj} /></ListGroup.Item>
	:
		<ListGroup.Item>Hello, <strong>{userData ? userData.name : ""}</strong> <div><Button onClick={()=>{
			dispatch(signOutForm());
		}} variant="primary" size="sm">SignOut</Button></div></ListGroup.Item>
	}
	
	</ListGroup>
)});

UserBlock = connect()(UserBlock);
export default UserBlock;