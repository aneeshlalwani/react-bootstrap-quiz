import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../assests/images/auc-1.png"
import image2 from "../assests/images/auc-2.png"
import image3 from "../assests/images/auc-3.png"
import image4 from "../assests/images/auc-4.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Auction = () => {
  const auctionStyle = {
    height: "88vh",
  };
  return (
    <Container fluid style={auctionStyle} className="col-sm-12 mol-md-6">
    <Row className="d-flex">
      <div className="ms-2">
        <h2 className="text-white">Hot auction</h2>
      </div>
      <Col className="mt-5">
        <Card style={{ width: "18rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "18rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "18rem" }} className="bg-black text-white">
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Title>Lorem Ips</Card.Title>
            
          </Card.Body>
        </Card>
      </Col>
      <Col className="mt-5">
        <Card style={{ width: "18rem" }} className="bg-black text-white">
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

export default Auction;
