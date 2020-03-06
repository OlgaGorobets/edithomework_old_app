import md5 from "react-native-md5";
export const CHANGE_ACTIVE_PDF = 'CHANGE_ACTIVE_PDF';
export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';
export const REMOVE_TEXT_VALUE = 'REMOVE_TEXT_VALUE';
export const ADD_NEW_TEXT_VALUE = 'ADD_NEW_TEXT_VALUE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const ADD_FIRST_MESSAGE = 'ADD_FIRST_MESSAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const ADD_NEW_PAGE = 'ADD_NEW_PAGE';
export const SIGN_FORM = 'SIGN_FORM';
export const SIGN_FB = 'SIGN_FB';
export const SIGN_OUT_FORM = 'SIGN_OUT_FORM';
export const SIGN_FORM_AND_ADD_NEW_PAGE = 'SIGN_FORM_AND_ADD_NEW_PAGE';
export const ADD_PDF = 'ADD_PDF';
export const REMOVE_PDF = 'REMOVE_PDF';
export const CHANGE_PDF_DATE = 'CHANGE_PDF_DATE';
export const CHANGE_PAGE_DATE = 'CHANGE_PAGE_DATE';
export const CHANGE_PAGE_NAME = 'CHANGE_PAGE_NAME';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_PAGES = 'LOAD_PAGES';
export const LOAD_PDFS = 'LOAD_PDFS';
export const LOAD_TEXTS = 'LOAD_TEXTS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER';

export function changeActivePdf(index) {
	return {
		type: CHANGE_ACTIVE_PDF,
		index: index
	};
}
export function changeTextValue(data) {
	return {
		type: CHANGE_TEXT_VALUE,
		id: data.id,
		text: data.text,
		max_width: data.max_width,
		x: data.x,
		y: data.y,
		status: data.status
	};
}
export function addNewTextValue(data) {
	return {
		type: ADD_NEW_TEXT_VALUE,		
		text: data.text,
		max_width: data.max_width,			
		x: data.x,
		y: data.y,
		page_id: data.page_id,
		image_index: data.image_index,
		id: data.id
	};
}
export function addFirstMessage(data) {	
	return {
		type: ADD_FIRST_MESSAGE,
		user_id: data.user_id,		
		msgText: data.msgText,
		date: data.date,
		
		text: data.text,		
		max_width: data.max_width,			
		x: data.x,
		y: data.y,
		page_id: data.page_id,
		image_index: data.image_index,
		id: data.id		
	};
}
export function addNewMessage(data) {	
	return {
		type: ADD_NEW_MESSAGE,
		user_id: data.user_id,
		text_id: data.text_id,
		text: data.text,
		date: data.date
	};
}
export function addNewPage(data) {	
	return {
		type: ADD_NEW_PAGE,
		name: data.name,		
		pdf_id: data.pdf_id,
		user_id: data.user_id	
	};
}
export function removeTextValue(id) {
	return {
		type: REMOVE_TEXT_VALUE,
		id: id
	};
}
export function removeMessage(id) {
	return {
		type: REMOVE_MESSAGE,
		id: id
	};
}
export function removePage(id) {
	return {
		type: REMOVE_PAGE,
		id: id
	};
}
export function signForm(userData) {
	return {
		type: SIGN_FORM,
		name: userData.login,
		pass: md5.hex_md5(userData.pass)
	};
}
export function signFB(userData) {	
	return {
		type: SIGN_FB,
		name: userData.name,
		pass: userData.pass,
		photo: userData.photo,
		id: userData.id
	};
}
export function signOutForm() {
	return {
		type: SIGN_OUT_FORM
	};
}
export function signFormAndAddNewPage(data) {	
	return {
		type: SIGN_FORM_AND_ADD_NEW_PAGE,
		name: data.name,		
		pdf_id: data.pdf_id,		
		
		login: data.login,
		pass: md5.hex_md5(data.pass)
	};
}
export function addPdf(data) {	
	return {
		type: ADD_PDF,
		path: data.path,
		images: data.images,
		user_id: data.user_id
	};
}
export function removePdf(id) {	
	return {
		type: REMOVE_PDF,
		id: id
	};
}

export function changePdfDate(id) {	
	return {
		type: CHANGE_PDF_DATE,
		id: id
	};
}

export function changePageDate(id) {	
	return {
		type: CHANGE_PAGE_DATE,
		id: id
	};
}

export function changePageName(id, name) {	
	return {
		type: CHANGE_PAGE_NAME,
		id: id,
		name: name
	};
}

export function loadUsers(data) {	
	return {
		type: LOAD_USERS,
		data: data
	};
}
export function loadPages(data) {	
	return {
		type: LOAD_PAGES,
		data: data
	};
}
export function loadTexts(data) {	
	return {
		type: LOAD_TEXTS,
		data: data
	};
}
export function loadPdfs(data) {	
	return {
		type: LOAD_PDFS,
		data: data
	};
}
export function loadMessages(data) {	
	return {
		type: LOAD_MESSAGES,
		data: data
	};
}
export function loadCurrentUser(id) {	
	return {
		type: LOAD_CURRENT_USER,
		id: id
	};
}