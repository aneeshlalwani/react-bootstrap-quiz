import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assests/images/logo.png";

const Header = () => {
    // const navStyle = {
    //     backgroundImage: "linear-gradient(to top, #3081ED, #9E52E5 10%, #000 50%)",
    // }
  return (
    <Navbar className="">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} alt="Company-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='active text-white'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>My PROFILE</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>ACTIVITY</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>HOW IT WORKS</Nav.Link>
          </Nav>
          <div className='ms-auto'>
          <Button variant="outline-light" className='btn-dark ms-3 text-white' onMouseOver={(e) => (e.target.style.backgroundColor = '#000')}>
      Create
    </Button>
            <Button variant="outline-light" className='btn-dark ms-3 text-white' onMouseOver={(e) => (e.target.style.backgroundColor = '#000')}>
      Sign in
    </Button>
        </div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;