import axios, { post } from 'axios';
import { CHANGE_ACTIVE_PDF } from '../actions';
import { CHANGE_TEXT_VALUE } from '../actions';
import { REMOVE_TEXT_VALUE } from '../actions';
import { ADD_NEW_TEXT_VALUE } from '../actions';
import { REMOVE_MESSAGE } from '../actions';
import { ADD_NEW_MESSAGE } from '../actions';
import { ADD_FIRST_MESSAGE } from '../actions';
import { REMOVE_PAGE } from '../actions';
import { ADD_NEW_PAGE } from '../actions';
import { SIGN_FORM_AND_ADD_NEW_PAGE } from '../actions';
import { SIGN_FORM } from '../actions';
import { SIGN_OUT_FORM } from '../actions';
import { ADD_PDF } from '../actions';
import { REMOVE_PDF } from '../actions';
import { CHANGE_PDF_DATE } from '../actions';
import { CHANGE_PAGE_DATE } from '../actions';
import { LOAD_USERS } from '../actions';
import { LOAD_PAGES } from '../actions';
import { LOAD_PDFS } from '../actions';
import { LOAD_TEXTS } from '../actions';
import { LOAD_MESSAGES } from '../actions';
import { LOAD_CURRENT_USER } from '../actions';
import { CHANGE_PAGE_NAME } from '../actions';
import { SIGN_FB } from '../actions';

import { formatDate } from '../helper';


const initialState = {  
	current_user: {
		id: null
	},
	users: [/*{
		id: 0,
		name: "OlkaOlkaOlkaOlka OlkaOlkaOlkaOlkaOlkaOlka",
		pass: "123"
	}*/],
	pdfs: [/*{
		path: "some path1 some path1 some path1 some path1 some path1some path1 some path1 some path1",
		id: 0,
		user_id: 0,
		load_date: "",
		last_edit_date: "",
		images: ["/uploads/photos/photo_pdf билета.png", "../photos/2.jpg", "../photos/3.jpg", "../photos/4.jpg", "../photos/5.jpg", "../photos/6.jpg", "../photos7.jpg", "../photos/8.jpg"]
	}*/],
	texts: [/*{
		text: "testing text1",
		x: 0,
		y:0,
		page_id: 0,
		image_index: 0,
		id: 0,
		max_width: "auto",
		status: "ok" //"ok", "warning"
	}*/],
	messages: [/*{
		id: 0,
		user_id: null,		
		text_id: 0,
		text: "message1",
		date: "date1"
	}*/],
	active_pdf_index: 0,
	pages: [/*{
		name: "page 1 page 1page 1page 1 page 1page 1page 1page 1page 1page 1page 1page 1page 1page 1page 1",
		id: 0,
		pdf_id: 0,
		user_id: 0
	}*/]  
};
export default function EditApp(state = initialState, action) {	
	let newTexts, newMessages, 
		id, newText, newMessage, 
		newPages, newPage, cUserId,
		newUsers, fUsers, pageId, newPdfs, newTextsIds;
		
	let saveData= (name, data)=>{
		const url = '/db.php';
		let savedData = JSON.stringify(data);
		const formData = new FormData();
		formData.append("name", name);
		formData.append("action", "set");
		formData.append("data", savedData);		
		post(url, formData).then((result)=>{
			console.log(result, "saved", name);
		});
	}	
	let removePdf= (images, pdf)=>{
		const url = '/remove_pdf.php';		
		const formData = new FormData();
		formData.append("images", JSON.stringify(images));
		formData.append("pdf", pdf);
		
		post(url, formData).then((result)=>{
			console.log(result, "removed");
		});
	}	
	switch (action.type) {
	case CHANGE_ACTIVE_PDF:
		return {
			...state,
			active_pdf_index: action.index
		}
	case CHANGE_TEXT_VALUE: 		
		newTexts = state.texts.map((txt)=>{			
			if(txt.id == action.id){
				txt.text = action.text;
				txt.max_width = action.max_width;	
				txt.x = action.x;	
				txt.y = action.y;
				txt.status = action.status;
				txt.last_edit_date = formatDate();				
			}
			return txt;
		});
		saveData("texts", newTexts);
		return {
			...state,
			texts: newTexts
		}
	case ADD_NEW_TEXT_VALUE: 			
		newText = {
			text: action.text,
			x: action.x,
			y:action.y,
			page_id: action.page_id,
			image_index: action.image_index,
			id: action.id,
			max_width: action.max_width,
			status: null,
			load_date: formatDate(),
			last_edit_date: formatDate()			
		};
		saveData("texts", [...state.texts, newText]);	
		return {
			...state,
			texts: [...state.texts, newText]
		}	
	case ADD_NEW_MESSAGE: 
		id = state.messages.length > 0 ? parseInt(state.messages.map((m)=>m.id).sort()[state.messages.length-1]) + 1 : 0;		
		newMessage = {
			id: id,
			user_id: action.user_id,
			text_id: action.text_id,
			text: action.text,
			date: action.date				
		};	
		saveData("messages", [
				...state.messages,
				newMessage
			]);
		return {
			...state,
			messages: [
				...state.messages,
				newMessage
			]
		}
	case ADD_FIRST_MESSAGE: 
		newText = {
			text: action.text,
			x: action.x,
			y:action.y,
			page_id: action.page_id,
			image_index: action.image_index,
			id: action.id,
			max_width: action.max_width,
			status: null
		};	
		id = state.messages.length > 0 ? parseInt(state.messages.map((m)=>m.id).sort()[state.messages.length-1]) + 1 : 0;
		newMessage = {
			id: id,
			user_id: action.user_id,
			text_id: action.id,
			text: action.msgText,
			date: action.date			
		};
		saveData("messages", [
				...state.messages,
				newMessage
			]);	
		saveData("texts", [...state.texts, newText]);				
		return {
			...state,
			texts: [...state.texts, newText],
			messages: [
				...state.messages,
				newMessage
			]
		}	
	case ADD_NEW_PAGE:
		id = state.pages.length > 0 ? parseInt(state.pages.map((p)=>p.id).sort()[state.pages.length-1]) + 1 : 0;
		newPage = {
			name: action.name,
			id: id,
			pdf_id: action.pdf_id,
			user_id: action.user_id,
			load_date: formatDate(),
			last_edit_date: formatDate()			
		};
		saveData("pages", [
				...state.pages,
				newPage
			]);
		return {
			...state,
			pages: [
				...state.pages,
				newPage
			]
		}			
	case REMOVE_TEXT_VALUE: 	
		newTexts = state.texts.filter((txt)=>{			
			return txt.id !== action.id;	
		});	
		newMessages = state.messages.filter((msg)=>{			
			return msg.text_id !== action.id;	
		});		
		saveData("texts", newTexts);
		saveData("messages", newMessages);		
		return {
			...state,
			texts: newTexts,
			messages: newMessages
		}	
	case REMOVE_MESSAGE: 	
		newMessages = state.messages.filter((msg)=>{			
			return msg.id !== action.id;	
		});		
		saveData("messages", newMessages);
		return {
			...state,
			messages: newMessages
		}	
	case REMOVE_PAGE: 	
		newPages = state.pages.filter((pg)=>{
			return pg.id !== action.id;
		});
		newTexts = state.texts.filter((txt)=>{			
			return txt.page_id !== action.id;	
		});	
		let oldTexts = state.texts.filter((txt)=>{			
			return txt.page_id == action.id;	
		});	
		newTextsIds = oldTexts.map((txt)=>{
			return txt.id;
		});
		newMessages = state.messages.filter((msg)=>{			
			return newTextsIds.indexOf(msg.text_id) == -1;	
		});			
		saveData("messages", newMessages);
		saveData("texts", newTexts);
		saveData("pages", newPages);
		return {
			...state,
			pages: newPages,
			texts: newTexts,
			messages: newMessages
		}	
	case SIGN_FB:	
		cUserId = null;
		newUsers = [...state.users];
		fUsers = state.users.filter((us)=>{
			return us.id == action.id;
		});
		if(fUsers.length > 0){
			cUserId = fUsers[0].id;
		}
		else{			
			newUsers = [
				...state.users,
				{
					id: action.id,
					name: action.name,
					pass: action.pass,
					photo: action.photo
				}
			]
			cUserId = action.id;
		}
		console.log(newUsers, "newUsersnewUsersnewUsers");
		saveData("users", [...newUsers]);
		localStorage.setItem("current_user_edithomework", cUserId);

		return {
			...state,
			current_user: {
				id: cUserId
			},
			users: [...newUsers]
		}		
	case SIGN_FORM:
		cUserId = null;
		newUsers = [...state.users];
		fUsers = state.users.filter((us)=>{
			return us.name == action.name && us.pass == action.pass;
		});
		if(fUsers.length > 0){
			cUserId = fUsers[0].id;
		}
		else{
			id = state.users.length > 0 ? parseInt(state.users.map((u)=>u.id).sort()[state.users.length-1]) + 1 : 0;
			newUsers = [
				...state.users,
				{
					id: id,
					name: action.name,
					pass: action.pass
				}
			]
			cUserId = id;
		}
		saveData("users", [...newUsers]);
		localStorage.setItem("current_user_edithomework", cUserId);
		return {
			...state,
			current_user: {
				id: cUserId
			},
			users: [...newUsers]
		}
	case SIGN_OUT_FORM:		
		localStorage.removeItem("current_user_edithomework");
		return {
			...state,
			current_user: {
				id: null
			}
		}
	case SIGN_FORM_AND_ADD_NEW_PAGE:
		cUserId = null;
		newUsers = [...state.users];
		fUsers = state.users.filter((us)=>{
			return us.name == action.login && us.pass == action.pass;
		});
		if(fUsers.length > 0){
			cUserId = fUsers[0].id;
		}
		else{
			id = state.users.length > 0 ? parseInt(state.users.map((u)=>u.id).sort()[state.users.length-1]) + 1 : 0;
			newUsers = [
				...state.users,
				{
					id: id,
					name: action.login,
					pass: action.pass
				}
			]
			cUserId = id;
		}	
		pageId = state.pages.length > 0 ? parseInt(state.pages.map((p)=>p.id).sort()[state.pages.length-1]) + 1 : 0;
		newPage = {
			name: action.name,
			id: pageId,
			pdf_id: action.pdf_id,
			user_id: cUserId,
			load_date: formatDate(),
			last_edit_date: formatDate()			
		};
		saveData("pages", [
				...state.pages,
				newPage
			]);
		saveData("users", [...newUsers]);	
		localStorage.setItem("current_user_edithomework", cUserId);		
		return {
			...state,
			pages: [
				...state.pages,
				newPage
			],
			current_user: {
				id: cUserId
			},
			users: [...newUsers]			
		}
	case ADD_PDF:
		id = state.pdfs.length > 0 ? parseInt(state.pdfs.map((p)=>p.id).sort()[state.pdfs.length-1]) + 1 : 0;
		console.log(id, "new pdf id");
		let newPdf = {
			id: id,
			path: action.path,
			images: action.images,
			user_id: action.user_id,
			load_date: formatDate(),
			last_edit_date: formatDate()				
		};
		saveData("pdfs", [
				...state.pdfs,
				newPdf
			]);
			console.log("new  data", [
				...state.pdfs,
				newPdf
			]);
			console.log("old data", state.pdfs)
		return {
			...state,
			pdfs: [
				...state.pdfs,
				newPdf
			]			
		}
	case REMOVE_PDF:	
		newPdfs = state.pdfs.filter((pd)=>{
			return pd.id !== action.id;
		});
		let removedPdfs = state.pdfs.filter((pd)=>{
			return pd.id == action.id;
		});	
		let removedPdf = removedPdfs.length > 0 ? removedPdfs[0] : null;
		newPages = state.pages.filter((pg)=>{
			return pg.pdf_id !== action.id;
		});
		let removedPages = state.pages.filter((pg)=>{
			return pg.pdf_id == action.id;
		});
		let removedPagesIds = removedPages.map((pg)=>{
			return pg.id;
		});
		newTexts = state.texts.filter((txt)=>{			
			return removedPagesIds.indexOf(txt.page_id)==-1;	
		});	
		let removedTexts = state.texts.filter((txt)=>{			
			return removedPagesIds.indexOf(txt.page_id)!==-1;	
		});	
		newTextsIds = removedTexts.map((txt)=>{
			return txt.id;
		});
		newMessages = state.messages.filter((msg)=>{			
			return newTextsIds.indexOf(msg.text_id) == -1;	
		});			
		saveData("messages", newMessages);
		saveData("texts", newTexts);
		saveData("pages", newPages);	
		saveData("pdfs", newPdfs);			
		removedPdf && removePdf(removedPdf.images, removedPdf.path);
		return {
			...state,
			pdfs: [...newPdfs],
			pages: [...newPages],
			texts: [...newTexts],
			messages: [...newMessages]
		}
	case CHANGE_PDF_DATE:		
		newPdfs = state.pdfs.map((pd)=>{			
			if(pd.id == action.id){
				pd.last_edit_date = formatDate();				
			}
			return pd;
		});	
		saveData("pdfs", [...newPdfs]);
		return {
			...state,
			pdfs: [...newPdfs]
		}
	case CHANGE_PAGE_DATE:
		console.log(action.id, "page action");
		newPages = state.pages.map((pd)=>{			
			if(pd.id == action.id){
				pd.last_edit_date = formatDate();				
			}
			return pd;
		});	
		saveData("pages", [...newPages]);
		return {
			...state,
			pages: [...newPages]
		}
	case CHANGE_PAGE_NAME:
		console.log(action.id, "page action");
		newPages = state.pages.map((pd)=>{			
			if(pd.id == action.id){
				pd.name = action.name;				
			}
			return pd;
		});	
		saveData("pages", [...newPages]);
		return {
			...state,
			pages: [...newPages]
		}		
	case LOAD_USERS:		
		return {
			...state,
			users: [...action.data]
		}	
	case LOAD_PAGES:		
		return {
			...state,
			pages: [...action.data]
		}
	case LOAD_PDFS:		
		return {
			...state,
			pdfs: [...action.data]
		}
	case LOAD_TEXTS:		
		return {
			...state,
			texts: [...action.data]
		}
	case LOAD_MESSAGES:		
		return {
			...state,
			messages: [...action.data]
		}
	case LOAD_CURRENT_USER:	
		let cUsers = state.users.filter((us)=>{
			return us.id == action.id;
		});
		let cUser = cUsers.length > 0 ? {id: action.id} : {...state.current_user}
		return {
			...state,
			current_user: cUser
		}		
    default:
      return state;
  }
}