import styled from 'styled-components'
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';

export const StyledCard = styled(Card)`
  cursor: pointer;
`;

export const MStyledCard = motion(StyledCard);

export const StyledBox = styled(Box)`
  padding: 4rem 9rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

export const ModalInfo = styled.div`
  width: 100%;
`;

export const ModalText = styled.div`
float:none;
overflow: visible;
text-align: justify;
line-height: 2;
`;

export const ModalImage = styled.div`
  float: right;
  margin: 0 0 1rem 2rem;
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

export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: start;
  flex-direction: column;
  padding: 2rem;
  transition: 0.4s ease;
  background: linear-gradient(to top, #e8e8e8 26%, #efefef 48%, #c7c7c7d3 75%, #e8e8e8 100%);
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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

export const Product = styled.div`
  display: flex;
  align-items: center;
  padding: 3%;
  justify-content: start;
  gap: 3rem;
  width: 100%;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  background-color: #a4a4a4;
  border: none;
  height: 1.5px;
  margin: 0 auto;
  width: 94%;
`;

export const Title = styled.h4`
  font-size: 2rem;
  font-weight: 500;
`;

export const ProductSection = styled.div`

`;

export const Description = styled.p`
  line-height: 1.7;
  color: grey;
  font-weight: 700;
`;

export const Price = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 6px;
  overflow: hidden;
  height: 230px;
  width: 25%;
  min-width: 250px;
  max-width: 400px;
  cursor: pointer;

  
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

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 75%;
  gap: 3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;  