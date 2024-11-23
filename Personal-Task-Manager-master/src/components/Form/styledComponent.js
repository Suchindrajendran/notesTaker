import styled from 'styled-components';

export const FormCardPage = styled.div`

  border-radius: 10px;
  border: 1px solid #000;
  padding: 40px;
  width: 95%;
  display: flex;
  justify-self: center;

  @media screen and (max-width:576px){
    padding: 14px;
    min-height: 162px;
  }

  @media screen and (max-width:768px){
    padding: 18px;
    min-height: 170px;
  }

  @media screen and (max-width:995px){
    padding: 22px;
    margin: 10px;
    min-height: 180px;
  }

  @media screen and (min-width: 1200px){
    min-height: 120px;
    padding: 28px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;


