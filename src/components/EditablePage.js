import React from 'react';
import { connect } from 'react-redux';
import {useParams,withRouter,Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt, faEdit, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import EditablePageView from './EditablePageView';
import Row from 'react-bootstrap/Row';

const mapStateToProps = state => {
    return {
		pages: state.pages,
		pdfs: state.pdfs,
		texts: state.texts,
		messages: state.messages,
		users: state.users,
		current_user: state.current_user
	};
};


const EditablePage = connect(mapStateToProps)(({ pages , pdfs, texts, messages, users, current_user, history}) => {
	let { id } = useParams();
	let activePages = pages.filter((item)=>{
		return item.id == id;
	});
	let activePage = activePages.length > 0 ? activePages[0] : null;
	let newTextId = texts && texts.length > 0 ? texts[texts.length-1].id + 1: 0;
	if(activePage !== null){
		let activePdfs = pdfs.filter((pdf)=>{
			return pdf.id == activePage.pdf_id;
		});
		let activePdf = activePdfs.length > 0 ? activePdfs[0] : null;
		activePage.pdf = activePdf;
		let activeTexts = texts && texts.filter((txt)=>{
			return txt.page_id == id;
		});
		activePage.texts = activeTexts;
		if(activePage.texts){
			activePage.messages = messages;
		}	
		activePage.users = users;
		activePage.current_user = current_user;
		let pageUsers = users.filter((us)=>{
			return us.id == activePage.user_id;
		});
		let user = pageUsers.length > 0 ? pageUsers[0] : null;		
		activePage.user = user;
	}
	return(
	<>
		<Helmet>                
            <title>Edit Homework {activePage !== null && activePage.pdf !== null ? (" - " + activePage.pdf.path + " - " + activePage.name) :""}</title>                
        </Helmet>	
		<Link to="/" className="backLink"> <FontAwesomeIcon icon={faChevronLeft} /> Back To Home Page</Link>	
	  {activePage === null || activePage.pdf == null ? <></> : <EditablePageView  {...{page: activePage, newTextId: newTextId}}/>}
		
	</>
)});


export default withRouter(EditablePage);