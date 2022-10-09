import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
`;

export const TextContainer = styled.div`
  line-height: 2;
  font-size: 1.7rem;
  text-align: justify;
`;

export const SmallCont = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem 0;
  color: #76767A;
  background-color: #F0F0FA;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 10px 10px 10px 0px;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const PaymentContainer = styled.div`
  width: 60%;
  line-height: 2.5;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    text-align: start;
  }
`;

export const ImageCont = styled.div`
  position: relative;
  margin: 1rem;
  box-sizing: border-box;
  
  border-radius: 10px;
  overflow: hidden;
  width: 40%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 30vh;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

