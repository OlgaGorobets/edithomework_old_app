import React, { useState, useEffect } from "react";


import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { addNewPage, signFormAndAddNewPage, changePdfDate, signFB, signForm} from '../actions';

import UserModal from './UserModal';
import PageView from './PageView';


let AddPageView = ({addFunction}) => {
	const [fieldValue, setFieldValue] = useState("");
	const [fieldsError, setFieldsError] = useState(false);
	const handleFieldValueChange = (e)=>{
		setFieldValue(e.target.value);
		setFieldsError(false);
	}
	const handleValidate = ()=>{
		if(fieldValue.trim().length > 0 && typeof addFunction === "function"){
			addFunction(fieldValue);
			setFieldValue("");
		}
		else{
			setFieldsError(true);
		}
	}
	return	(<>
			<h6>Create New Book</h6>
			<InputGroup className="createNewBookForm">
				<Form.Control size="sm" type="text" name="name" value={fieldValue} placeholder="Name..." onChange={handleFieldValueChange} />				
				<InputGroup.Append>
				  <Button size="sm" onClick={handleValidate}><FontAwesomeIcon icon={faPlus} /> Add</Button>
				</InputGroup.Append>
			</InputGroup>
			{fieldsError ? <Alert  variant="danger">Required field</Alert> : <></>}
		</>)

	
};

export default AddPageView;