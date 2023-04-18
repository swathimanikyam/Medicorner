import React from "react";       
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <>
    <br></br>
    <br></br>
    <Box>
     
      <Container>
        <Row>
          <Column>
            <Heading>Medicorner</Heading>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">press</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>

          </Column>
          <Column>
            <Heading>For patients</Heading>
            <FooterLink href="#">search for doctors</FooterLink>
            <FooterLink href="#">search for clinics</FooterLink>
            <FooterLink href="#">search for hospitals</FooterLink>
            <FooterLink href="#">Book Diagnostic Tests</FooterLink>
            <FooterLink href="#">Book FullBody Checkups</FooterLink>
            <FooterLink href="#">Medicorner Plus</FooterLink>
            <FooterLink href="#">Covid Hospital lisiting</FooterLink>
            <FooterLink href="#">Medicorner Care Clinics</FooterLink>
            <FooterLink href="#">Readabout medicines</FooterLink>
            <FooterLink href="#">Medicornerdrive</FooterLink>
            <FooterLink href="#">Health app</FooterLink>
            <FooterLink href="#">Medicorner plus infinity</FooterLink>
         </Column>
          <Column>
            <Heading>For Doctors</Heading>
            <FooterLink href="#">MEdicorner profile</FooterLink>
            <FooterLink href="#">for clinics</FooterLink>
            <FooterLink href="#">Ray by medicorner</FooterLink>
            <FooterLink href="#">practo reach</FooterLink>
            <FooterLink href="#">Ray Tab</FooterLink>
            <FooterLink href="#">medicorner pro</FooterLink>

          </Column>
          <Column>
         
          <Heading>For hospitals</Heading>
          <FooterLink href="#">Insta by Practo</FooterLink>
          <FooterLink href="#">  Qikwell by Practo</FooterLink>
          <FooterLink href="#">Practo Profile</FooterLink>
          <FooterLink href="#">Practo Reach</FooterLink>
          <FooterLink href="#">Practo Drive</FooterLink>
          <FooterLink href="#"> For Corporates</FooterLink>
          <FooterLink href="#"> Wellness Plans</FooterLink>
          </Column>
          <Column>
            <Heading>More</Heading>
          

            <FooterLink href="#">  Help</FooterLink>
                    
            <FooterLink href="#">  Developers</FooterLink>
            <FooterLink href="#">      Privacy Policy</FooterLink>
            <FooterLink href="#"> Terms & Conditions</FooterLink>
            <FooterLink href="#"> PCS T&C</FooterLink>
            <FooterLink href="#"> Healthcare Directory</FooterLink>
            <FooterLink href="#"> Practo Health Wiki</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              
            </FooterLink>
            <FooterLink href="#">Instagra </FooterLink>
            <FooterLink href="#">   Twitter</FooterLink>
              

            <FooterLink href="#">facebook</FooterLink>
            <FooterLink href="#">Linkedin</FooterLink>

            <FooterLink href="#">Githud</FooterLink>

          </Column>
        </Row>
        <img src=""></img>
      </Container>
    </Box>
    </>
  );
};
export default Footer;