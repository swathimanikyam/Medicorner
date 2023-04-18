import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card1-style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Carosoul1() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
          
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.

        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 3 // optional, default to 1.

        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.

        }
      };
    return ( 
      <>
      <br></br>
      <br></br>
      <br></br>
        <div>
          <h3>Consult top doctors online for any health concern</h3>
          <p>Private online consultations with verified doctors in all specialists</p>
        </div>
        <br></br>
        <br></br>
        <Carousel responsive={responsive}>
          
          <div className='container'>
          <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://www.careersinhealthcare.com/wp-content/uploads/2018/03/Dentist.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">DENTIST</h5>
    <p class="card-text">Teething troubles?Schedule a dental checkup</p>
  </div>
</div>
          </div>
           <div>
           <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://7dmc.ae/wp-content/uploads/2019/08/7DMC-gynacology.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Gynecologist/Obstetrician</h5>
    <p class="card-text">Explore for womens health,pregnancy and infertility treatments</p>
  </div>
</div>
           </div>
           <div>
           <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://th.bing.com/th/id/OIP.VkHnhSusFGPqKNI9xrNmcwHaEK?pid=ImgDet&rs=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dietitian/Nutrition</h5>
    <p class="card-text">Get guidance on eating right,weight management and sports nutrition</p>
  </div>
</div>
           </div>
            <div>
            <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://th.bing.com/th/id/OIP.fOIr3jxfA_liFJgVeHWAXgHaE8?pid=ImgDet&rs=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Physiotherapist</h5>
    <p class="card-text">Pulled muscle?Get it treated by a trained physiotherpist</p>
  </div>
</div>
            </div>
            <div>
            <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://th.bing.com/th/id/R.57bc651d3cf739c8eca99ad6f1b0d8db?rik=9HpPyRtWAbcY4Q&riu=http%3a%2f%2fwww.oregoncareersinhealthcare.com%2fwp-content%2fuploads%2f2020%2f03%2fgeneral-surgeon-near-me.jpg&ehk=kqrIx%2bGQkwxBquoa74%2biEjwYna3YJr2yUDJJVsAX9RU%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">General surgeon</h5>
    <p class="card-text">Need to get operated?find the right surgeon</p>
  </div>
</div>
            </div>
            <div> <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://adlerfootankle.com/wp-content/uploads/2021/07/Class-IV-Laser-Therapy--1024x576.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Orthopedist</h5>
    <p class="card-text">For bone and joints issues ,spinal injuries and more</p>
  </div>
</div></div>
            <div> <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://th.bing.com/th/id/OIP.NvPG3fvaB5O1H0JfaM1n5gAAAA?pid=ImgDet&rs=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">General physician</h5>
    <p class="card-text">Find right family doctor in your neighborhood</p>
  </div>
</div></div>
            <div>
            <div class="card" style={{ width:"18rem", height:"20rem"}}>
  <img src="https://th.bing.com/th/id/OIP.aaY9AlxPWUoXPeqNij_EbgAAAA?pid=ImgDet&rs=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">pidiatricion</h5>
    <p class="card-text">child specialists and Doctors for infact</p>
  </div>
</div>
            </div>
           
            
            
</Carousel>
         </>
    
     );
}

export default Carosoul1;