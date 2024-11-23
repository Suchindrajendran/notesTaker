import styled from 'styled-components';

export const HomePage = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  
  @media screen and (max-width:576px){
    margin: 10px;
    padding: 10px;
    width: 93%;
  }

  @media screen and (min-width:1200px){
    margin: 18px;
    padding: 18px;
    width: 100%;
  }

  /* padding: 10px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  width: 95vw; */
`;

export const IntroContainer = styled.div`
    
    width: 100%;
    border: 1px solid;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    align-items: center;
    text-align: center;
 
  @media screen and (max-width: 576px){
    padding: 7px;
    border: 1px solid; 
    border-radius: 4px;
    margin: 8px;
  }

  @media screen and (max-width: 768){
    padding: 10px;
    border: 1px solid; 
    border-radius: 4px;
    margin: 13px;
  }



  /* border-radius: 10px;
  width: 100%;
  padding: 40px;
  justify-self: center;
  border: 1px solid #000; */
`;