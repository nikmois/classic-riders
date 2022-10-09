import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: start;
  flex-direction: column;
  background-color: #e8e8e8;
  padding: 2rem;
  transition: 0.4s ease;
`;

export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
`;

export const Carousel = styled.div`
margin-top: 2rem;
  width: 100vw;
  height: 100px;
`;

export const Partner = styled.div`
  width: 90px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  transition: .4s ease;
  align-self: center;
  &:hover{
    font-size: 1.9rem;
  }
`;


