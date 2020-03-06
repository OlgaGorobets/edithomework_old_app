import React, { useState, useEffect, Component } from "react";
import { connect } from 'react-redux';
import axios, { post } from 'axios';
import {Helmet} from "react-helmet";
import { Route,Link,withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Blocks from './components/Blocks';
import EditablePage from './components/EditablePage';
import UserBlock from './components/UserBlock';
import PolicyPage from './components/PolicyPage';


import './styles/main.scss';

import { loadPdfs, loadPages, loadMessages, loadUsers, loadTexts, loadCurrentUser} from './actions';

function App({location, dispatch}) {	
	let getStartData = ()=>{
		const url = '/db.php';
		let dataItems = [["users", loadUsers], ["pages", loadPages], ["texts", loadTexts], ["pdfs", loadPdfs], ["messages", loadMessages]];
		let loadingArr = [];

		dataItems.forEach((item)=>{
			const formData = new FormData();		
			formData.append("action", "get");
			formData.append("data", "");				
			formData.append("name", item[0]);
			loadingArr.push(post(url, formData));
		});
		axios.all(loadingArr).then(axios.spread((...responses) => {			
			dataItems.forEach((item, index)=>{
				let res = responses[index];
				if(res.data.error == false){
					dispatch(item[1](JSON.parse(res.data.data)));	
				}
			});	
			let cUserId = localStorage.getItem("current_user_edithomework");
			
			if(cUserId !== null){
				dispatch(loadCurrentUser(cUserId));
			}
		})).catch(errors => {
			console.log("loading error");
		});				
	}
	useEffect(() => {
		getStartData();		
	}, []);		
    return (
		<Container>
		     <Helmet>                
                <title>Edit Homework</title>                
            </Helmet>
			<Row className="headerBlock">	
				<Link className="mainLogoLink" to="/"><h1 className="mainLogo"><span>Edit</span>Homework</h1></Link>	
				<UserBlock />
			</Row>	
			<Row className="contentBlock">			
				<Route exact path="/" component={Blocks} />
				<Route exact path="/pages/:id" component={EditablePage} />
				<Route exact path="/policy" component={PolicyPage} />
			</Row>	
			<Row className="bottomBlock">	
				<Col>EditHomework, olga@edithomework.com</Col>
				<Col style={{"text-align": "right", "opacity": 0}}><Link to="/policy">Privacy Policy</Link></Col>					
			</Row>	 			
		</Container>
    );
}

export default connect()(withRouter(App));
