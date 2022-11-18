import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';


export const StyledBox = styled(Box)`
  padding: 4rem 9rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
  font-weight: 700;
  text-align: center;
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
  overflow: hidden;
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
  margin: 0 auto 3rem auto;
  display: flex;
  height: 100%;
  overflow: initial;
  max-width: 900px;
  transition: all 0.3s ease;
  cursor: pointer;
  

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

export const MStyledCard = motion(StyledCard)

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

export const ModalInfo = styled.div`
  width: 100%;
`;

export const ModalText = styled.div`
float:none;
overflow: visible;
font-size: 1.5rem;
text-align: justify;
line-height: 2;
`;

export const ModalImage = styled.div`
  float: right;
  margin: 0 0 4rem 6rem;
  border-radius: 6px;
  width: 40%;
  max-width: 400px;
  cursor: pointer;

  div, span {
    position: unset !important;
    
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  
`;

export const Video = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`;

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
  max-width: 700px;
  margin: 2rem auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 200px;
  }
`;