 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


 function Card3() {
   return ( 
      <div>
         <br></br>
         <br></br>
         <br></br>
         <hr></hr>
         <br></br>
         <br></br>

       
         <Row  style={{alignItems:'center'}}>
            <Col sm={4} style={{alignItems:"center"}}>
            <h4>Read Top Articals From Health Exprets</h4>
            <p>Health articals that Keep you Informed about about good health practices and achieve your goals</p>
            <button className=' btn btn-primary'>see all articles</button>
            </Col>
                <Col sm={3}>  
                  <img src="https://th.bing.com/th/id/R.faf17f5acf32166ccce37d3cbce8249b?rik=Ek82sewE4So4lA&riu=http%3a%2f%2fjamaicahospital.org%2fnewsletter%2fwp-content%2fuploads%2f2016%2f10%2fThinkstockPhotos-519759630.jpg&ehk=pmUEBwWlXkXTbdLqWdRMyhKmFeX1azCQ8mqJoEFjuL0%3d&risl=&pid=ImgRaw&r=0" height={300} width={350}  alt=""/>
                  <h4 > CORONQVIRUS</h4>
                    <p >12 Coronavirus Myths And Facts That you should Be Aware OF</p>

                    </Col> 
                    <Col sm={3}>  
                    <img src="https://th.bing.com/th/id/OIP.fSjMz3s0IY2FMN105hRuggHaE8?pid=ImgDet&rs=1"   height={300} width={350}  alt=""/>

                   <h4 >VITAMINSAND SUPPLIMENTS</h4> 
                    <p >Eating right toBuild Immunity Against Cold And viral infection</p>
            
                    
                    
                    </Col>  
                    
                    
                     </Row>
                     <br></br>  
                    <br></br>
                    <hr></hr> 
                     
      </div>
      
    );
 }
 
 export default Card3;