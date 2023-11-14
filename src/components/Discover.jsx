import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../assests/images/auc-1.png"
import image2 from "../assests/images/auc-2.png"
import image3 from "../assests/images/auc-3.png"
import image4 from "../assests/images/auc-4.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Discover = () => {
  return (
    <Container fluid className="col-sm-12 mol-md-6">
         <div className="ms-2">
        <h2 className="text-white">Discover</h2>
      </div>
    <Row className="d-flex">
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image4} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
    </Row> 
    <Row className="d-flex">
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "15rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image4} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
    </Row> 
    </Container>
            
  );
};

export default Discover;
