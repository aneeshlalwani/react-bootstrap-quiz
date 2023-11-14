import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assests/images/logo.png";

const Header = () => {
//   const fastechTitle = {
//     color: "#9B51E0",
//   }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} alt="Company-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='active'>Home</Nav.Link>
            <Nav.Link href="#action2">My PROFILE</Nav.Link>
            <Nav.Link href="#action2">ACTIVITY</Nav.Link>
            <Nav.Link href="#action2">HOW IT WORKS</Nav.Link>
          </Nav>
            <Button variant="outline-success">CREARE</Button>
            <Button variant="outline-success">SIGN IN</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;