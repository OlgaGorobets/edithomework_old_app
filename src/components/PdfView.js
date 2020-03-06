import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { changeActivePdf, removePdf } from '../actions';

import UserModal from './UserModal';

let PdfView = ({pdf, dispatch}) => {	
	let signModalRemoveObj = {
		signIn: false,
		signUp: false,
		sureRemovePdf: true,
		title: "Remove PDF File",		
		"button": {
			title: "Remove PDF",
			icon: faTrashAlt
		},
		buttons: [{
			title: "Cancel"
		},{
			title: "Remove it!",
			func: function(){
				dispatch(removePdf(pdf.id));
			}
		}]
	};
	return (
		<ListGroup.Item className={pdf.is_active ? "list-group-item-primary" : ""}>			
			<div className="itemTitle"><Button variant="link"  onClick={e => {
				e.preventDefault();	
				dispatch(changeActivePdf(pdf.index));
			}}><span>{pdf.path} <FontAwesomeIcon icon={faChevronRight} /></span></Button></div>	
			<div className="absBtns">
			{pdf.current_user.id !== null && pdf.user && pdf.current_user.id == pdf.user.id ?
				<ButtonGroup ><UserModal {...signModalRemoveObj} /></ButtonGroup>
				: <></>
			}
			</div>
			<div className="calendarBlock">
				<div className="calendarIcon"><FontAwesomeIcon icon={faCalendarAlt} /></div>
				<div className="calendarValue">
				{pdf.user ?  <div><small>Loaded by {pdf.user.id == pdf.current_user.id ? "you" : pdf.user.name} {pdf.load_date}</small>
				<div><small>Last pages edits - {pdf.last_edit_date}</small></div></div> : <></>}
				</div>
			</div>
		</ListGroup.Item>
	);
}
PdfView = connect()(PdfView);
export default PdfView;