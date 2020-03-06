import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { addNewPage, signFormAndAddNewPage, changePdfDate, signFB, signForm} from '../actions';

import UserModal from './UserModal';
import PageView from './PageView';
import AddPageView from './AddPageView';


const mapStateToProps = state => {
	
	return {	
		
		pages: state.pages,
		pdfs: state.pdfs,
		active_pdf_index: state.active_pdf_index,
		users: state.users,
		current_user: state.current_user		
	};
};


let PageBlock = connect(mapStateToProps)(({ pages, pdfs, active_pdf_index, users, current_user, dispatch }) => {
	let activePdfId = pdfs.length > 0 ? pdfs[active_pdf_index].id : null;
	let activePdfPath = pdfs.length > 0 ? pdfs[active_pdf_index].path : null;
	let activePages = pages.filter((item)=>{
		return activePdfId == item.pdf_id;
	});	

	let signModalObj = {
		signIn: true,
		signUp: true,
		addPage: false,
		fb: (response)=>{
			console.log("response", response.id);
			response.id && dispatch(signFB({
				id: response.id,
				name: response.name,
				pass: response.accessToken,
				photo: response.picture.data.url
			}));	
			
		},		
		title: "Login or Register to Create New Book",
		"button": {
			title: "Create New Book" ,
			icon: faPlus,
			large: true
		},
		buttons: [{
			title: "Cancel"			
		},{
			title: "Ok",
			func: function(fieldsValue){
				//dispatch(changePdfDate(activePdfId));
				dispatch(signForm({
					login: fieldsValue.login,
					pass: fieldsValue.pass
				}));				
			}
		}]
	};
	const addNewPageFunction = (name)=>{
		dispatch(changePdfDate(activePdfId));
		dispatch(addNewPage({
			name: name,
			pdf_id: activePdfId,
			user_id: current_user.id
		}));		
	}

	return	(<>
		{pdfs.length > 0 ?
		<ListGroup className="list-group-flush">
			
			<ListGroup.Item className="topItem">
			{current_user.id !== null ? <AddPageView {...{addFunction: addNewPageFunction}} />	 :	<UserModal {...signModalObj} />	}
			{activePages.length > 0 && activePdfPath !== null ? <div className="topItemText">Books, created from  {activePdfPath}: </div> : <></>}
			</ListGroup.Item>
			<div className="scrollBlock">
			{activePages.sort((a,b)=>{
			let d1 = new Date(a.last_edit_date);
			let d2 = new Date(b.last_edit_date);
			return +d1 > +d2 ? -1 : +d1 < +d2 ? 1 : 0;
		}).map((page, index) => {	
				let pageUsers = users.filter((us)=>{
					return us.id == page.user_id;
				});
				let user = pageUsers.length > 0 ? pageUsers[0] : null;		
				let activePage = {
					...page,
					user: user,
					current_user: current_user
				}
				return(			
					<PageView key={index} {...{page: activePage}} />
				)}
			)}
			{activePages.length == 0 ? <ListGroup.Item>Don't have any Books</ListGroup.Item> : <></> }
			</div>		
		</ListGroup>
	: <></>
	}
</>)

	
});

export default PageBlock;