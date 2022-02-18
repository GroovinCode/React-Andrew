import styled from 'styled-components';

export const Grid = styled.div`
  display: inline-grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: .5fr 1fr 1fr 1fr;
  grid-template-rows: .5fr .25fr 1fr .25fr;
  grid-template-areas: 
    "Head Head Head Head"
    "Nav Nav Nav Nav"
    "Side Main Main Main"
    "Foot Foot Foot Foot";  
`;

export const Head = styled.header`
  grid-area: Head;
  background-color: #B2C2D6;
  box-sizing: border-box;
  border: 2px solid blue;
  border-radius: 5px;
  margin: 1em;
`;

export const Nav = styled.nav`
  display: inline-grid;
  grid-area: Nav;
  background-color: white;
`;

export const Side = styled.aside`
  grid-area: Side;
  background-color: white;
`;

export const Main = styled.main`
  grid-area: Main;
  background-color: white;
`;

export const Foot = styled.footer`
  grid-area: Foot;
  background-color: white;
`;