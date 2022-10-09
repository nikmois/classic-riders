import styled from 'styled-components'


export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
margin: 5vh auto 10vh auto;
font-size: 100%;
display: flex;
gap: 5rem;
padding: 6rem 1rem 0 1rem;
@media screen and (max-width: 750px){
flex-direction: column;
}
`;
export const Contacts = styled.div`
  display: flex;
  align-items: start;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  line-height: 2;
`;

export const Button = styled.button`
    width: 30%;
    text-align: center;
    margin: 2rem 0 1rem 0;
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
  @media screen and (max-width: 630px) {
    width: 50%;
    }
`;

export const Title = styled.h3`
    margin-bottom: 25px;
    font-size: 2rem;
    @media screen and (max-width: 830px) {
        margin-bottom: 15px;
    }
`;

export const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
`;