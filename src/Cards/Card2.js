import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Card1-style.css'

function Card2() {
  return (

        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h3>Consult top doctors online for any health concern</h3>
          <p>Private online consultations with verified doctors in all specialists</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Row >
    
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/01/17/86/27/240_F_117862705_H0zpzP2pVnEEq8HZPJbToEqYhF3bUWhb.jpg" />
            <Card.Body>
              <Card.Title>Period doubts for pregnancy</Card.Title>
              <Card.Link href="..">CONSULT NOW</Card.Link>

              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.xjyhSPjoyImlu4vllZVlzwHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title>Acne,pimple orSkin issues</Card.Title>
              <Card.Link >CONSULT NOW</Card.Link>

    
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://static.wixstatic.com/media/c6d4633bd88546239f0e2364aa2e2048.png/v1/fill/w_372,h_372,al_c,usm_0.66_1.00_0.01/c6d4633bd88546239f0e2364aa2e2048.png" />
            <Card.Body>
              <Card.Title>Performance issues in bed</Card.Title>
              <Card.Link >CONSULT NOW</Card.Link>

             
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.4g7Lq-quNkk0juz7MVBfbgHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title>Cold,cough or fever</Card.Title>
              <Card.Link >CONSULT NOW</Card.Link>

              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://www.kingswaycompounding.com.au/wp-content/uploads/2019/07/children-circle.png" />
            <Card.Body>
              <Card.Title>child not feeling well</Card.Title>
              <Card.Link >CONSULT NOW</Card.Link>

              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width:"15rem", height:"22rem"}}>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/illustration-girl-illustration-girl-stress-122414016.jpg" />
            <Card.Body>
              <Card.Title>Depression or anxity</Card.Title>
              <Card.Link >CONSULT NOW</Card.Link>

             
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </>
  );
}



export default Card2;