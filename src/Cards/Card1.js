import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Card1() {
  return (

<div>
    <Row >
    
        <Col>
          <Card style={{ width:"15rem", height:"16rem"}}>
   ,         <Card.Img variant="top" src="https://www.itij.com/sites/default/files/styles/hero_image_small/public/2019-07/consulting20a20doctor20via20video20call_6.jpg?itok=m7iM8MHI" />
            <Card.Body>
              <Card.Title>Instant vedio consultation</Card.Title>
              <Card.Text>Connect within 60sec</Card.Text>
              <Card.Link href=".."></Card.Link>

              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"16rem"}}>
            <Card.Img variant="top" src="https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg" />
            <Card.Body>
              <Card.Title>Find Doctors near you</Card.Title>
              <Card.Text>Confirm appointments</Card.Text>

              <Card.Link ></Card.Link>

    
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width:"15rem", height:"16rem"}}>
            <Card.Img variant="top" src="https://scitechdaily.com/images/Doctor-Giving-Medicine-777x518.jpg" />
            <Card.Body>
              <Card.Title>Medicines</Card.Title>
              <Card.Text>Essentials at your doorstep</Card.Text>
              <Card.Link ></Card.Link>

              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"16rem"}}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.uxrs1iqgp-rd58EDiv9aawHaE6?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title>Lab Tests</Card.Title>
              <Card.Text>Sample pickup at your home</Card.Text>
              <Card.Link ></Card.Link>

              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"16rem"}}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.TQevcDUAD3OlZaKqbMa5WQHaEK?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title>surgiries</Card.Title>
              <Card.Text>safe and trusted surgery centers</Card.Text>
              <Card.Link ></Card.Link>

             
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div>
  );
}



export default Card1;