import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer p-5">
      <Container>
        <Row>
          <Col sm={8}>
          <Row>
            <Col>
            <ul style={{listStyle:"none",lineHeight:"40px"}}>
              <p className='DIN-font'>SECTION 1</p>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
            </ul>
            </Col>
            <Col>
            <ul style={{listStyle:"none",lineHeight:"40px"}}>
              <p className='DIN-font'>SECTION 2</p>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
            </ul>
            </Col>
            <Col>
            <ul style={{listStyle:"none",lineHeight:"40px"}}>
              <p className='DIN-font'>SECTION 3</p>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
            </ul>
            </Col>
            <Col>
            <ul style={{listStyle:"none",lineHeight:"40px"}}>
              <p className='DIN-font'>SECTION 4</p>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
              <li>SubScetion</li>
            </ul>
            </Col>
            </Row>

            <p className='ms-4 mt-3'>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
</p>

          

          </Col>
          <Col sm={4}>

            <p className='mt-5 logoStyling custom-font' style={{float:"right"}}> THIS IS THE <br/> LOGO</p>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;