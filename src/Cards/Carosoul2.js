import Carousel from 'react-bootstrap/Carousel';

function Carousel2() {
  return (
    <div>
      <br></br>
      <br></br><br></br>
      <div style={{textAlign:"center" }}>
        <h2>What our users have to say</h2>
      </div>
      <br></br>
      
    <Carousel>
      <Carousel.Item interval={1000}>
       
        <div style={{textAlign:"center"}}>
          <h5>Very easy to book maintain history.Hasslefree free from older <br></br>versions of booking appointments via telephone...<br></br>thanks MEDICORNER for making it simple.</h5>
          </div>
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
      <div style={{textAlign:"center"}}>
          <h5>Very good app.well thought out about<br></br>booking/rescheduling/canceling an appointment.ALSO,<br></br>Doctors feedback mechanism is good and describes all <br></br>the basics in agood way</h5>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        
      <div style={{textAlign:"center"}}>
          <h5>Very helpful.far easier than doing same things on <br></br>computers .Allow quick and easy search with speedy<br></br> booking.EVen maintain History of doctors visited</h5>
          </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousel2;