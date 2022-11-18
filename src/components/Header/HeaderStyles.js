import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';



export const Container = styled.div`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transition: .3s ease-in;
  overflow: hidden;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0 10vw;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 3vw;
  }
`;


export const StyledMenuIcon = styled(MenuIcon)`
  color: white;
  transform: scale(2);
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 0.5rem 0;
  min-width: 11rem;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 2 / 3;
    max-width: 12rem;
  }
  @media screen and (max-width: 480px) {
    grid-area: 1 / 1 / 2 / 4;
  }
  
`;

export const LogoText = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 3.5vw;
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledListItem = styled(ListItem)`
  padding: 2rem 0;
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 7;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 7 / 2 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.4s ease;
  &:hover{
    transform: scale(1.5);
  }
`;

export const Flags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
`;

export const Div4 = styled.div`
  grid-area: 1 / 8 / 2 / 8;
  min-width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const MobileButton = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 8 / 2 / 8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  }
`;
// Navigation Links
export const NavLink = styled.a`
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 500;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
padding: 7px;
&:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`