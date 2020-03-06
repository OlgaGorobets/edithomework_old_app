import React from 'react';
import { connect } from 'react-redux';
import { Route,Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { removePage, changePdfDate} from '../actions';
import UserModal from './UserModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faEdit, faCalendarAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

let PageView = ({page, dispatch}) => {	
	let signModalRemoveObj = {
		signIn: false,
		signUp: false,
		sureRemove: true,
		title: "Remove Book",		
		"button": {
			title: "Remove Book",
			icon: faTrashAlt
		},
		buttons: [{
			title: "Cancel"
		},{
			title: "Remove it!",
			func: function(){
				dispatch(changePdfDate(page.pdf_id));
				dispatch(removePage(page.id));				
			}
		}]
	};
	return (
		<ListGroup.Item>				
			<div className="itemTitle"><Link to={"/pages/" +page.id}><span>{page.name}</span> <FontAwesomeIcon icon={faChevronRight} /></Link></div>
			<div className="absBtns">			
			{ page.user && page.user.id == page.current_user.id ? <ButtonGroup><UserModal {...signModalRemoveObj} /></ButtonGroup> : <></>}
			</div>
			<div className="calendarBlock">
				<div className="calendarIcon"><FontAwesomeIcon icon={faCalendarAlt} /></div>
				<div className="calendarValue">
				{page.user ?  <div><small>Added by {page.user.id == page.current_user.id ? "you" : page.user.name} {page.load_date}</small>
				<div><small>Last edit - {page.last_edit_date}</small></div></div> : <></>}
				</div>
			</div>
		</ListGroup.Item>
	);
}
PageView = connect()(PageView);
export default PageView;