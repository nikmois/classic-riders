import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 7vw;
	color: #454545;
	line-height: 0.65;
	font-weight: 700;
	letter-spacing: 3rem;
	width: 100vw;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 10vw;
		letter-spacing: 1.5rem;
  	}
`;

export const LogoContainer = styled.div`
	width: 80vw;
	max-width: 1100px;
	margin: 0 auto -1vw auto;
	display: flex;
	align-items: center;
	justify-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 94vw;
		margin: 0 3vw -1vw 3vw;
  	}
`

export const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #454545;
	min-height: 15vh;
	width: 100vw;
	padding: 3vh 0;
`;

export const Logo = styled.img`
  width: 100%;
  
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 900px;
	width: 100%;
	padding: 2rem;
	gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
  }
`;

export const Hr = styled.hr`
    background-color: #7e7e7e;
    border: none;
    height: 1.5px;
	width: 100%;
`;

export const Text = styled.div`
    text-align: center;
    text-decoration: none;
    padding: 20px 10px 35px 10px;
    font-size: 14px;
	color: #cecece;
	padding: 10px;
    
    @media screen and (max-width: 650px) {
        font-size: 12px;
        padding: 15px 10px 20px 10px;
    }
`;


export const SocLink = styled.a`
    text-decoration: none;
    color: #cecece;
	
    font-weight: 550;
`;

export const BottomContainer = styled.div`
	background-color: #454545;
	width: 100%;
	
`;

export const Left = styled.div`
	flex: 1;
	width: 100%;
	max-width: 20rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Right = styled.div`
	flex: 2;
	text-align: justify;
	color: #e3e3e3;
	font-size: clamp(1.4rem, 3vw, 1.7rem);
	font-weight: 500;
	line-height: 1.5;
`;