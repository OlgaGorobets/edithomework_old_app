import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import UserModal from './UserModal';
import PdfView from './PdfView';
import FileUploader from './FileUploader';
import { signForm, signFB} from '../actions';

const mapStateToProps = state => {
  return {		
		pdfs: state.pdfs,
		active_pdf_index: state.active_pdf_index,
		users: state.users,
		current_user: state.current_user
  };
};


const PdfBlock = connect(mapStateToProps)(({ pdfs, active_pdf_index, users, current_user , dispatch}) => {
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
		title: "Login or Register to Upload File",
		"button": {
			title: "Upload PDF File" ,
			icon: faPlus,
			large: true
		},
		buttons: [{
			title: "Cancel"			
		},{
			title: "Ok",
			func: (fieldsData)=>{
				dispatch(signForm(fieldsData));			
			}
		}]
	};
	return(
	<ListGroup className="list-group-flush">
		<ListGroup.Item className="topItem">{current_user.id == null ? <UserModal {...signModalObj} /> : <FileUploader/>}</ListGroup.Item>
		<div className="scrollBlock">
		{pdfs.sort((a,b)=>{
			let d1 = new Date(a.last_edit_date);
			let d2 = new Date(b.last_edit_date);
			return +d1 > +d2 ? -1 : +d1 < +d2 ? 1 : 0;
		}).map((pdfItem, index) => {	
			let pdfUsers = users.filter((us)=>{
				return us.id == pdfItem.user_id;
			});
			let user = pdfUsers.length > 0 ? pdfUsers[0] : null;
			let pdf = {
				...pdfItem,
				is_active: index === active_pdf_index,
				index: index,
				user: user,
				current_user: current_user
			}
			return(			
				<PdfView key={index} {...{pdf: pdf}} />
			)}
		)}
		{pdfs.length == 0 ? <ListGroup.Item>Don't have any PDF Files</ListGroup.Item> : <></> }
		</div>
	</ListGroup>
)});


export default PdfBlock;