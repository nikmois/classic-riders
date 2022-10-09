import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';

export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
`;

export const StyledIcon = styled(CloseIcon)`
  position: fixed;
  top: 20px;
  right: 20px;
  transform: scale(7);
  padding: 5px;
  background-color: #00000070;
  cursor: pointer;
  color: white;
`;

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

export const Gradient = styled.div`
  height: 50px;
  margin-top: -50px;
  position: relative;
  background-color: #e8e8e8;
  background: linear-gradient(to top, #e8e8e8ff 0%, #e8e8e800 100% );
  transition: 0.4s ease;
`;

export const ButtonCont = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8e8e8;
`;


export const StyledCard = styled(Card)`
  width: 90vw;
  margin-bottom: 3rem;
  display: flex;
  height: 100%;
  overflow: initial;
  max-width: 900px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    transform: scale(1.03);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    &:hover{
    transform: none;
  }
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: .2s ease;
  &:hover{
    background-color: #b6b6b6;
    color: white;
  }
`;  


export const StyledCardContent = styled(CardContent)`
  width: 60%;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    text-align: start;
  }
`;


export const CardImage = styled.div`
  position: relative;
  margin: 2rem;
  box-sizing: border-box;
  border-radius: 6px;
  overflow: hidden;
  height: 230px;
  width: 40%;
  transition: all 250ms ease;
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    height: 200px;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
  }
`;