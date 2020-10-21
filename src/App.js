import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import TeamDetails from './pages/teamDetails/TeamDetails';
import TeamsTable from './pages/teamsTable/TeamsTable';
import {colors, shadows} from './styles/global';

const Container = styled.div`
  background-color: ${colors.grey};
  min-height: 100vh;
  color: ${colors.dark};
`;

const Header = styled.div`
  background-color: ${colors.white};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-shadow: ${shadows.main};
`;

const Logo = styled(Link)`
  display: flex;
  color: ${colors.dark};
  text-decoration: none;

  & p {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 800;
    font-style: italic;
  }
`;

const Social = styled.div`
  & img {
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
  }
`;

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 0 15%;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Logo to="/teams">
            <img src={require('./images/logo.svg')} alt=""/>
            <p>TeamPlayer</p>
          </Logo>
          <Social>
            <img src={require('./images/sn_facebook.svg')} alt=""/>
            <img src={require('./images/sn_instagram.svg')} alt=""/>
          </Social>
        </Header>
        <PageContainer>
          <Switch>
            <Route path="/teams/:teamId">
              <TeamDetails />
            </Route>
            <Route path="/">
              <TeamsTable />
            </Route>
          </Switch>
        </PageContainer>
      </Container>
    </Router>
  );
}

export default App;
