import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContainerExample() {
    const heroStyle = {
        height: "90vh",
    }
    return (
    
    <Container style={heroStyle}>
      <Row>
        <Col>
            <div>
            <h1>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
            <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
            </div>
            <div>
            <Button variant="outline-success">Explore</Button>
            <Button variant="outline-success">Create</Button>
            </div>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
            
        </Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;