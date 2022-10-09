import styled from 'styled-components';

export const TextContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  color: white;
  max-width: 600px;
  background-color: #00000057;
  padding: 2rem;
`;

export const UpperSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
  text-align: center;
`;

export const DownSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 700;
`;


export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(to bottom, transparent 0%, black 20%);
`;

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom,  #0000005a 0%, transparent 10%);
  }
`;
