import './App.css'; 
import { Foot, Grid, Head, Main, Nav, Side } from './Components/Grid';
import { PageTitle } from './Components/PageTitle';
import { Menus } from './Components/Menus';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Grid>

        <Head> 
          <PageTitle>
          </PageTitle>
        </Head>

        <Nav>
          <Menus>
          </Menus>
        </Nav>

        <Side></Side>
      
        <Main>   
          <Outlet>
          </Outlet>
        </Main>
        
        <Foot></Foot>

      </Grid>
    </div>
  );
}
