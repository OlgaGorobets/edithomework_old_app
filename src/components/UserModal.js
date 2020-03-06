import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import FacebookLogin from 'react-facebook-login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const UserModal = (data) => {		
	let customFieldsValue = {
		login: "",
		pass: "",
		name: ""
	};
	let customFieldsError = {
		login: false,
		pass: false,
		name: false
	};	
	let requiredFields = {
		name: data.addPage,
		login: data.signIn,
		pass: data.signIn,
		
	}

	const [show, setShow] = useState(false);
	const [fbData, setFbData] = useState(false);
	const [fieldsValue, setFieldsValue] = useState({...customFieldsValue});
	const [fieldsErrors, setFieldsErrors] = useState({...customFieldsError});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);	
	
	const responseFacebookCallback = (response)=>{
		response && typeof data.fb === "function" && data.fb(response);
		handleClose();	
		clearFields();
	}	
	
	let validateFields = ()=>{
		let res = true;
		let errors = {};
		for(let key in requiredFields){
			if(requiredFields[key]){
				let isError = fieldsValue[key].trim().length == 0;				
				errors[key] = isError;
				if(isError){
					res = false;
				}
			}
			else{
				errors[key] = false;
			}
		}
		setFieldsErrors({
			...errors
		});			
		
		return res;
	}	
	let clearFields = ()=>{
		setFieldsValue({
			...customFieldsValue
		})		
	}
	let handleFieldValueChange = (e)=>{
		setFieldsValue({
			...fieldsValue,
			[e.target.getAttribute("name")]: e.target.value
		})
		setFieldsErrors({
			...customFieldsError
		});
	}
	let signIn = "";
	let signUp = "";
	let sureRemove = "";	
	let sureRemovePdf = "";	
	let fb = "";
	let addPage = "";
	if(data.signIn){
		signIn = <Card><Card.Body>
			<Card.Title>Login or Register <small>(if you don't have an account)</small></Card.Title>
			<Card.Text>
			<div><Form.Control size="sm" name="login" type="text" value={fieldsValue.login} placeholder="Login" onChange={handleFieldValueChange} />
			{fieldsErrors.login ? <Alert  variant="danger">Required field</Alert> : <></>}</div>
			<div>
			<Form.Control size="sm" name="pass" type="password" value={fieldsValue.pass} placeholder="Password" onChange={handleFieldValueChange} />
			{fieldsErrors.pass ? <Alert  variant="danger">Required field</Alert> : <></>}</div>
			</Card.Text>
		</Card.Body></Card>;
		fb = <FacebookLogin			
			appId="176592233585640"
			autoLoad={false}
			fields="name,email,picture"
			
			callback={responseFacebookCallback}
			version="3.1"
			cssClass="my-facebook-button-class"
			icon="fa-facebook"
		  />;
	}

	if(data.sureRemove){
		sureRemove = <div>Are you sure? You won't be able to recover this page! </div>;
	}
	if(data.sureRemovePdf){
		sureRemovePdf = <div>Are you sure? You won't be able to recover this Pdf and all pages created from this Pdf will be removed! </div>;
	}	
	if(data.addPage){
		addPage = <div><Form.Control size="sm" type="text" name="name" value={fieldsValue.name} placeholder="Name" onChange={handleFieldValueChange} />
			{fieldsErrors.name ? <Alert  variant="danger">Required field</Alert> : <></>}</div>
	}

	return (
    <>
      <Button size={data.button.large ? "lg" : "sm"} variant="primary" onClick={handleShow}>
		  {data.button.icon ? <FontAwesomeIcon icon={data.button.icon} /> : ""} 
			{data.button.title}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			{signIn} 
			{fb}
			{signUp}
			{sureRemove}
			{sureRemovePdf}
			{addPage}
		</Modal.Body>
        <Modal.Footer>
			{data.buttons.map((but, index)=>{
				return (<Button size="sm" key={index}  variant="primary" onClick={()=>{
					if(validateFields()){
						typeof but.func === "function" && but.func(fieldsValue);
						handleClose();	
						clearFields();
					}

				}}>
					{but.title}
				</Button>);				
				})
			}
        </Modal.Footer>
      </Modal>
    </>	);
}	


export default UserModal;