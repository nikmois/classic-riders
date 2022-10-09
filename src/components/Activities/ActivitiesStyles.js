import styled from 'styled-components'


export const Header = styled.h2`
  font-size: clamp(2.5rem, 3vw, 3.5rem);
  margin: 7rem 0 3rem 0;
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