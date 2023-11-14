import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import heroImage from "../assests/images/hero-img.png";
import laura from "../assests/images/laura.png"

function ContainerExample() {
    const heroStyle = {
        height: "90vh",
    }
    const heroTitle = {
        marginTop: "30%",
    }
    const heroCol = {
        marginLeft: "10%",
        marginTop: "10%"
    }
    
    const buttonStyle = {
        backgroundImage: "linear-gradient(to top, #3081ED, #9E52E5, #000)",
      };
      const cardBg = {
        backgroundColor: "black",
      };    
    return (
    
    <Container fluid style={heroStyle}>
      <Row>
        <Col className='ms-5'>
            <div>
            <h1 className='text-white fs-1' style={heroTitle}>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
            <p className='text-white'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
            </div>
            <div className='mx-3'>
            <Button variant="outline-light" className='mx-3 p-3 text-white fw-bold' style={buttonStyle}>Explore</Button>
            <Button variant="outline-light" className='btn-dark mx-3 p-3 text-white fw-bold' onMouseOver={(e) => (e.target.style.backgroundColor = '#000')}>Create</Button>
            </div>
        </Col>
        <Col className=''style={heroCol}>
        <Card style={{ width: '18rem', cardBg}} >
      <Card.Img src={heroImage} />
      <Card.Body className='item-inline'>
        <Card.Title>
          <img src={laura} alt="" className="mr-2" /> 
          <p className="d-inline">Laura</p>
        </Card.Title>
    
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;