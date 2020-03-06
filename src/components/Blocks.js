import React from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PdfBlock from './PdfBlock';
import PageBlock from './PageBlock';


const mapStateToProps = state => {
  return {		
		pdfs: state.pdfs,
		active_pdf_index: state.active_pdf_index
  };
};


const Blocks = connect(mapStateToProps)(({ pdfs, active_pdf_index }) => {
	return(
		<>			
			<Col><Row><div className="blockBorder"><PdfBlock /></div></Row></Col>
			<Col><Row><div className="blockBorder"><PageBlock /></div></Row></Col>
		</>		
)});


export default Blocks;