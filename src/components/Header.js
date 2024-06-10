import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from 'react-bootstrap/Badge';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header(props){


  const {count} = props;
  return (
 
   
    <div>
        
        
       
      
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ArmyShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Головна</Nav.Link>
            <Nav.Link href="#cart">Корзина
            <Badge bg="success">{count}</Badge>
            </Nav.Link>
            <Nav.Link href="#Vidguk">Відгуки</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
