// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navegator = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/home">UserApp</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/usuarios">Usuários</Nav.Link>
                <Nav.Link href="/contatos">Contato</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Navegator;