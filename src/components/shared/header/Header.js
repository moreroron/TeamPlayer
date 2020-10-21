import React from 'react';
import { Logo, Container } from './style';

const Header = () => {
  return (
    <Container>
      <Logo to="/teams">
        <img src={require('../../../images/logo.svg')} alt="" />
        <p>TeamPlayer</p>
      </Logo>
    </Container>
  );
};

export default Header;
