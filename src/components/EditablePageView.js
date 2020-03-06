import React , { useState, useEffect,useRef } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert  from 'react-bootstrap/Alert';
import ReactPaginate from 'react-paginate';

import UserModal from './UserModal';
import ImagesPaginator from './ImagesPaginator';
import EditableField from './EditableField';

import { hasSomeParentTheClass, formatDate } from '../helper';

import { changeTextValue, removeTextValue , addNewTextValue, 
		removeMessage, addNewMessage, addFirstMessage, removePage, changePdfDate, changePageDate, changePageName} from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faArrowsAlt, faExclamation, faCheck, faEnvelope, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

let EditablePageView = ({page, newTextId, dispatch}) => {
console.log(page, "page");	
	let previewLength = parseInt(window.innerHeight/40) - 3 ;
	if(previewLength < 5){
		previewLength = 5;
	}
	
	const customFieldState = {
		"visibility": "hidden",
		"left": 0,
		"top": 0,
		"value": "",
		"width": 0,
		"height": 0,
		"imageTextId": null
	};
	const customButtonsVisibility = {
		"remove": "visible",
		"move": "visible",
		"warning": "visible",
		"ok": "visible",
		"message": "visible"
	};
	const customButtonsStatus = {
		"warning": false,
		"ok": false,
		"message": true
	};
	let startImageIndex = 0;
	let hash = window.location.hash;
	if(hash.indexOf("#page_") !== -1){
		let pageNum = parseInt(hash.replace("#page_", ""));			
		if(!isNaN(pageNum) && pageNum > 0 && pageNum < page.pdf.images.length){
			startImageIndex = pageNum;					
		}
	}		
	console.log(startImageIndex, "startImageIndex");
	const canvasRef = useRef(null);
	const [imageTexts, setImageTexts] = useState([]);
	const [activeMessages, setActiveMessages] = useState([]);	
	const [activeMessageText, setActiveMessageText] = useState("");	
	const [imageIndex, setImageIndex] = useState(startImageIndex);
	const [fieldData, setFieldData] = useState({...customFieldState});
	const [buttonsVisibility, setButtonsVisibility] = useState({...customButtonsVisibility});
	const [buttonsStatus, setButtonsStatus] = useState({...customButtonsStatus});
	const [isMove, setMovingMode] = useState(false);	

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
				dispatch(removePage(page.id));
			}
		}]
	};

	let handlePageChange = (pageData)=>{	
		setImageIndex(pageData.selected);		
	};
	let handleFieldTextChange = (e)=>{	
		
		setFieldData({
			...fieldData,
			"value": e.target.value
		});			
		if(e.target.value.trim().length > 0){			
			if(fieldData.imageTextId == null){
				dispatch(addNewTextValue({
					text: e.target.value, 
					max_width: e.target.offsetWidth,
					x: fieldData.left,
					y: fieldData.top,
					page_id: page.id,
					image_index: imageIndex,
					id: newTextId
				}));
				dispatch(changePageDate(page.id));
				dispatch(changePdfDate(page.pdf_id));				
				setButtonsVisibility({
					...customButtonsVisibility,
					remove: "visible"
				});	
				setFieldData({
					...fieldData,
					"imageTextId": newTextId,
					"value": e.target.value
				});	
				let value = e.target.value;
				renderImage().then((result)=>{				
					setImageTexts([...setTextsVisibility(getTexts(), {id: fieldData.imageTextId, visibility: "hidden"})]);			
				});				
			}
			else{
				dispatch(changeTextValue({
					text: e.target.value, 
					id: fieldData.imageTextId,
					max_width: e.target.offsetWidth,
					x: fieldData.left,
					y: fieldData.top
				}));
				dispatch(changePageDate(page.id));
				dispatch(changePdfDate(page.pdf_id));
				setImageTexts([...setTextsVisibility(getTexts(), {id: fieldData.imageTextId, visibility: "hidden"})]);	
			}	
			
		}	
	};
	let handleFieldTextRemove = (e)=>{				
		dispatch(removeTextValue(fieldData.imageTextId));
		dispatch(changePageDate(page.id));
		dispatch(changePdfDate(page.pdf_id));		
		setFieldData({...customFieldState});
		renderImage();
	};			
	let handleImageTextsClick = (e)=>{	
		if(!hasSomeParentTheClass(e.target, "imageText") && !hasSomeParentTheClass(e.target, "imageTextFileldParent")){
			setButtonsVisibility({
				...customButtonsVisibility,
				remove: "hidden",
				ok: "hidden",
				warning: "hidden"
			});
			setButtonsStatus({...customButtonsStatus});			
			let rect = e.target.getBoundingClientRect();
			setFieldData({
				...customFieldState,
				"visibility": "visible",
				"width": 120,
				"height": 30,
				"left": e.clientX - rect.x,
				"top": e.clientY - rect.y
			});
			setActiveMessages([]);			
			setImageTexts([...setTextsVisibility(imageTexts)]);
		}
	};
	let handleFileldMouseDown = (e)=>{
		console.log("handleFileldMouseDown");
		setMovingMode(true);
	};
	let handleFileldMouseUp = (e)=>{
		console.log( "handleFileldMouseUp");
		setMovingMode(false);
	};
	let handleFileldMouseMove = (e)=>{
		e.preventDefault();		
		e.stopPropagation();			
		console.log(isMove, "is move");
		if(isMove){			
			let rect = e.target.getBoundingClientRect();
			console.log(rect.x, e.clientX, "-----");
			setFieldData({
				...fieldData,
				"left": e.clientX - rect.x,
				"top": e.clientY - rect.y
			});	
			dispatch(changeTextValue({
				text: fieldData.value, 
				id: fieldData.imageTextId,
				max_width: fieldData.max_width,
				x: fieldData.left,
				y: fieldData.top
			}));
			dispatch(changePageDate(page.id));
			dispatch(changePdfDate(page.pdf_id));			
		}
	};
	let handleFieldTextWarning = (e)=>{
		e.preventDefault();		
		e.stopPropagation();		
		dispatch(changeTextValue({
			text: fieldData.value, 
			id: fieldData.imageTextId,
			max_width: fieldData.max_width,
			x: fieldData.left,
			y: fieldData.top,
			status: buttonsStatus.warning ? null : "warning"
		}));
		dispatch(changePageDate(page.id));
		dispatch(changePdfDate(page.pdf_id));		
		setButtonsStatus({
			...customButtonsStatus,
			warning: !buttonsStatus.warning,
			ok: buttonsStatus.warning ?  buttonsStatus.ok : false
		});		
		renderImage().then((result)=>{
			setImageTexts([...setTextsVisibility(imageTexts, {id: fieldData.imageTextId, visibility: "hidden"})]);
		});		
	};
	let handleFieldTextOk = (e)=>{
		e.preventDefault();		
		e.stopPropagation();		
		dispatch(changeTextValue({
			text: fieldData.value, 
			id: fieldData.imageTextId,
			max_width: fieldData.max_width,
			x: fieldData.left,
			y: fieldData.top,
			status: buttonsStatus.ok ? null : "ok"
		}));
		dispatch(changePageDate(page.id));
		dispatch(changePdfDate(page.pdf_id));		
		setButtonsStatus({
			...customButtonsStatus,
			warning: buttonsStatus.ok ?  buttonsStatus.warning : false,
			ok: !buttonsStatus.ok
		});		
		renderImage().then((result)=>{
			setImageTexts([...setTextsVisibility(imageTexts, {id: fieldData.imageTextId, visibility: "hidden"})]);
		});		
		
	};
	let handleFieldTextMessageVisibility = ()=>{
		setButtonsStatus({
			...buttonsStatus,
			message: !buttonsStatus.message
		});		
	};
	let handleActiveMessagesRemove = (e, msg)=>{
		
		dispatch(removeMessage(msg.id));
		dispatch(changePageDate(page.id));
		dispatch(changePdfDate(page.pdf_id));		
		renderImage().then((result)=>{
			setImageTexts([...setTextsVisibility(imageTexts, {id: fieldData.imageTextId, visibility: "hidden"})]);
			let messages = page.texts.filter((txt)=>{
				return txt.id == fieldData.imageTextId;
			})[0].messages;
			setActiveMessages([
				...messages
			]);					
		});			
	};
	let handleAddNewMessage = (e)=>{			
		if(/*e.keyCode == 13 && e.shiftKey == false &&*/ activeMessageText.trim().length > 0){			
			e.preventDefault();
			let text_id = fieldData.imageTextId;
			if(fieldData.imageTextId == null){				
				dispatch(addFirstMessage({
					text: "", 
					max_width: 0,
					x: fieldData.left,
					y: fieldData.top,
					page_id: page.id,
					image_index: imageIndex,
					id: newTextId,
					user_id: page.current_user.id,
					msgText: activeMessageText,//e.target.value,
					date: formatDate()			
				}));
				dispatch(changePageDate(page.id));
				dispatch(changePdfDate(page.pdf_id));
				setFieldData({
					...fieldData,
					"imageTextId": newTextId
				});	
				text_id = newTextId;
				console.log(newTextId, "newTextId");
			}
			else{
				dispatch(addNewMessage({
					text: activeMessageText,//e.target.value,
					date: formatDate(),
					text_id: fieldData.imageTextId,
					user_id: page.current_user.id
				}));
				dispatch(changePageDate(page.id));
				dispatch(changePdfDate(page.pdf_id));				
			}		
			renderImage().then((result)=>{				
				setImageTexts([...setTextsVisibility(getTexts(), {id: text_id, visibility: "hidden"})]);
				let texts = page.texts.filter((txt)=>{
					return txt.id == text_id;
				});
				
				if(texts.length > 0){					
					setActiveMessages([
						...texts[0].messages
					]);						
				}
				setActiveMessageText("");				
			});
			

		}		
	};
	let handleActiveMessageText = (e)=>{
		setActiveMessageText(e.target.value);	
	};
	let imageTextFieldBlur = (e)=>{		
		if(!hasSomeParentTheClass(e.target, "imageTexts")){
			setMovingMode(false);
			setFieldData({...customFieldState});			
			setImageTexts([...setTextsVisibility(imageTexts)]);
		}			
	}
	let imageTextClick = (e, imageTextId, imageTextStatus, messages, text)=>{
		e.preventDefault();		
		e.stopPropagation();	
		
		setMovingMode(false);
		setButtonsVisibility({...customButtonsVisibility});		
		setButtonsStatus({
			...customButtonsStatus,
			warning: imageTextStatus == "warning",
			ok: imageTextStatus == "ok",
		});
		let rect = e.currentTarget.getBoundingClientRect();
		setFieldData({
			"visibility": "visible",
			"left": e.currentTarget.offsetLeft,
			"top": e.currentTarget.offsetTop,
			"value": text,
			"width": rect.width + 30,
			"height": rect.height > 30 ? rect.height : 30,
			"imageTextId": imageTextId
		});
		setActiveMessages([
			...messages
		]);
		setImageTexts([...setTextsVisibility(imageTexts, {id: imageTextId, visibility: "hidden"})]);
	}
	let renderImage = ()=>{
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');				
		const image = new Image();
		image.src = page.pdf.images[imageIndex];
	
		return new Promise(resolve => {
			image.onload = () => {
				let w = 1000;
				let h = (w * image.height) / image.width;
				ctx.canvas.width  = w;
				ctx.canvas.height = h;			
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				ctx.drawImage(image, 0, 0, w, h);			
				setImageTexts(getTexts());		
				resolve({status: 'ok'});
			};				
		});	
	}
	let setTextsVisibility = (texts, activeTxt)=>{
		return texts.map((txt)=>{	
			let visibility = "visible";
			if(activeTxt !== undefined && txt.id == activeTxt.id){
				visibility  = activeTxt.visibility;
			}
			txt.visibility = visibility;
			return txt;
		});			
	}	
	let getTexts = ()=>{
		let texts = page.texts.filter((txt)=>{
			return txt.image_index == imageIndex;
		});
		texts.forEach((txt)=>{
			txt.messages = page.messages.filter((msg)=>{
				return msg.text_id == txt.id;
			});
		});
		
		return setTextsVisibility(texts);		
	}
	let handleChangePageName = (name)=>{
		console.log("new name", name);
		
		dispatch(changePageName(page.id, name));
		dispatch(changePageDate(page.id));
		dispatch(changePdfDate(page.pdf_id));		
	}

	useEffect(() => {		
		renderImage(imageIndex);
		console.log("---ed--->>>");
	}, [imageIndex]);
	
	return (
		<Container onClick={imageTextFieldBlur}>
			<Row>
				{page.user && page.user.id == page.current_user.id ? <div className="removeBookBtnParent"><ButtonGroup className="removeBookBtn"><UserModal {...signModalRemoveObj} /></ButtonGroup></div> : <></>}
				<div><h2 className="bookPageTitle">{page.user && page.user.id == page.current_user.id ? <EditableField {...{text: page.name, saveTextFunction: handleChangePageName}}/> : <>{page.name}</>} </h2>
				</div>
				
				<div style={{width: "100%"}}><div className="calendarBlock">
					<div className="calendarIcon"><FontAwesomeIcon icon={faCalendarAlt} /></div>
					<div className="calendarValue">
					{page.user ?  <div><small>Added by {page.user.id == page.current_user.id ? "you" : page.user.name} {page.load_date}</small>
					<div><small>Last edit - {page.last_edit_date}</small></div></div> : <></>}
					</div>
				</div></div>
				
				<ImagesPaginator {...{images: page.pdf.images, items: previewLength, onPageChange: handlePageChange, activeIndex: imageIndex, pageId: page.id}}/>						
				
			</Row>
			<Row>
				<div className="imageParent">
					<canvas
					  ref={canvasRef}
					/>	
					<div className="imageTexts" onClick={handleImageTextsClick} /*onMouseMove={handleFileldMouseMove}*/>
						{imageTexts.map((txt, index) => {	
							return(			
								<div key={index}  style={{
									"position": "absolute",
									"zIndex": 3,
									"left": txt.x,
									"top": txt.y,
									"maxWidth": txt.max_width,
									"visibility": txt.visibility,
									"borderWidth": !(page.user && page.user.id == page.current_user.id) && txt.text == "" ? 0 : 1
								}}  className={txt.status ? ("imageText " + (txt.status + "Text")) : "imageText"} onClick={(e)=>{										
									imageTextClick(e, txt.id, txt.status, txt.messages, txt.text);
								}}><span>{txt.text}</span>									
									{txt.messages.length > 0 ?
									<Button variant="primary" size="sm"><FontAwesomeIcon icon={faEnvelope} />{txt.messages.length}</Button>																	
									: <></>}
								</div>
							)}
						)}	
						<div className="imageTextFileldParent" style={{
							"left": fieldData.left,
							"top": fieldData.top,
							"visibility": fieldData.visibility
						}}  >
							<textarea  
								disabled={!(page.user && page.user.id == page.current_user.id)}
								placeholder="Your text..."
								onChange={handleFieldTextChange}
								style={{
									"width": fieldData.value == "" && !(page.user && page.user.id == page.current_user.id) ? 0 : fieldData.width,
									"borderWidth": page.user && page.user.id == page.current_user.id ? 1 : 0,
									"height": fieldData.height,
									"resize": page.user && page.user.id == page.current_user.id ? "both" : "none"
								}} 
								value={fieldData.value} 
								className={buttonsStatus.warning ? "form-control form-control-warning imageTextFileld" : 
											buttonsStatus.ok ? "form-control form-control-ok imageTextFileld" : "form-control imageTextFileld"}							
								rows="1"
								/*onMouseDown={handleFileldMouseDown} 
								onMouseUp={handleFileldMouseUp} 								
								onDragStart={()=>{return false;}} */
							/>
							<div className="imageTextFileldButtons">
								{page.user && page.user.id == page.current_user.id ? <Button style={{
									"display":  buttonsVisibility.remove == "visible" ? "inline" : "none"
								}} onClick={handleFieldTextRemove} variant="outline-primary" size="sm"><FontAwesomeIcon icon={faTrashAlt} /></Button> : <></>}
															
								<Button style={{
									"display":  buttonsVisibility.warning == "visible" ? "inline" : "none"
								}} onClick={handleFieldTextWarning} variant={buttonsStatus.warning ? "danger" : "outline-danger"} size="sm"><FontAwesomeIcon icon={faExclamation} /></Button>
								<Button style={{
									"display":  buttonsVisibility.ok == "visible" ? "inline" : "none"
								}} onClick={handleFieldTextOk} variant={buttonsStatus.ok ? "success" : "outline-success"} size="sm"><FontAwesomeIcon icon={faCheck} /></Button>		
								<Button style={{
									"display":  buttonsVisibility.message == "visible" ? "inline" : "none"
								}} onClick={handleFieldTextMessageVisibility} variant={buttonsStatus.message ? "primary" : "outline-primary"} size="sm"><FontAwesomeIcon icon={faEnvelope} /></Button>									
							</div>	
							<div className="imageTextFileldMessageParent" style={{
								"display": buttonsStatus.message ? "block" : "none"
							}}>
								<Alert variant="primary">
									{activeMessages.map((msg, index) => {
										let mUsers = page.users.filter((us)=>{
											return us.id == msg.user_id;
										});
										let mUser = mUsers.length > 0 ? mUsers[0] : null;
										return(			
											<div className="textMessage" key={index} >
												<div className="textMessageUser">{mUser ? <>{mUser.id == page.current_user.id ? "you" : mUser.name}, </>  : <>unsigned user, </> } {msg.date}</div>
												<div className="textMessageText">{msg.text}</div>
												{mUser && mUser.id == page.current_user.id &&
												<Button onClick={(e)=>{
													handleActiveMessagesRemove(e, msg);
												}} size="sm"><FontAwesomeIcon icon={faTrashAlt} /></Button>
												}												
											</div>											
										)}
									)}									
									<div><textarea
										onChange={handleActiveMessageText}										
										placeholder="Your message..."
										className="form-control imageTextFileldMessageField"							
										rows="4"
										value={activeMessageText}
									/>
										<ButtonGroup className="imageTextFileldMessageBtn"> <Button className="simpBtn" onClick={(e)=>{
											handleAddNewMessage(e);
										}} variant="primary" size="sm">Add Message</Button>	</ButtonGroup>								
									</div>
								</Alert>
							</div>
						</div>
					</div>
				</div>
			</Row>
		</Container>
	);
}
EditablePageView = connect()(EditablePageView); 
export default EditablePageView;



