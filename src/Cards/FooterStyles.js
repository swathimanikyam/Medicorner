import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: blue;
  position: bottom;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
margin: auto;
    /*background: red;*/
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(150px, 1fr));
  grid-gap: px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(20px, 10fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 8px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: orange;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
