import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/shared/header/Header';
import TeamDetails from './components/teamDetails/TeamDetails';
import TeamsTable from './components/teamsTable/TeamsTable';
import { colors } from './styles/global';

const Container = styled.div`
  background-color: ${colors.grey};
  min-height: 100vh;
  color: ${colors.dark};
`;

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 0 15%;

  @media (max-width: 850px) {
    padding: 0 1.5rem;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Header />
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
