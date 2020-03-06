import React, { useState, useEffect } from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

let ImagesPaginator = ({images,activeIndex, items, onPageChange, pageId}) => {	
	const [activePage, setActivePage] = useState(0);
	const [activeItem, setActiveItem] = useState(0);
	const [activeImages, setActiveImages] = useState(images);
	
	let setPage = (e, type)=>{
		e.preventDefault();
		let pages = parseInt(images.length/items);
		let aPage = type == "next" ? activePage < pages ? activePage+1 : 0 :
		activePage == 0 ? pages : activePage-1;
		setActivePage(aPage);	
				
		if(!(activeItem >= items*aPage && activeItem < (items * aPage + items))){		
			let activeInd = items*aPage;
			setActiveItem(activeInd);
			window.location.hash = "#page_" + activeInd;
			typeof onPageChange == "function" && onPageChange({selected: activeInd});			
		}
		setActiveImages(images.filter((img, index)=>{
			return index >= items*aPage && index < (items * aPage + items);
		}));		
	}
	useEffect(() => {
		let aPage = activePage;
	
		console.log(activeIndex, "activeIndex");
		if(activeIndex > 0){
			setActiveItem(activeIndex);
			//typeof onPageChange == "function" && onPageChange({selected: activeIndex});
			if(activeIndex > (items * activePage + items)){
				aPage = parseInt(activeIndex/items);
				setActivePage(aPage);				
			}		
			
		}
		setActiveImages(images.filter((img, index)=>{
			return index >= items*aPage && index < (items * aPage + items);
		}));			
		console.log("--pag->>>");
	},[images]);	
	
	return (
		<div className="imagePreviewsContainer">
			{images.length < items ? <></> : <div className="imagePreviewsPrev" onClick={(e)=>{
				setPage(e, "prev");
				}}><FontAwesomeIcon icon={faChevronUp} /></div>}
			
			<div className="imagePreviews">			
			{activeImages.map((img, index)=>{				
				let src = img.replace(".png", "_preview.png").replace(".jpg", "_preview.jpg");
				return <div onClick={(e)=>{
					e.preventDefault();
					let activeInd = items * activePage + index;
					setActiveItem(activeInd);
					window.location.hash = "#page_" + activeInd;
					typeof onPageChange == "function" && onPageChange({selected: activeInd});
				}} className={activeItem == (items * activePage + index) ? "active imagePreview" : "imagePreview"}>
					<img src={src}/>
					<span className="imagePreviewNumber"><span>{items * activePage + index+1}</span></span></div>
			})}
			</div>
			{images.length < items ? <></> : <div onClick={(e)=>{
				setPage(e, "next");
				}} className="imagePreviewsNext"><FontAwesomeIcon icon={faChevronDown} /></div>}			
			
		</div>
	);
}

export default  ImagesPaginator;