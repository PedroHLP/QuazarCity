import { Navbar, Nav } from 'react-bootstrap';

const NavbarSite = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Início</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#jornal">Jornal</Nav.Link>
                    <Nav.Link href="#atualizacoes">Atualizações</Nav.Link>
                    <Nav.Link href="#ajuda">Comandos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarSite;