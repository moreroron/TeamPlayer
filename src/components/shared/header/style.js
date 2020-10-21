import styled from 'styled-components';
import { colors, shadows } from '../../../styles/global';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${colors.white};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  box-shadow: ${shadows.main};
`;

export const Logo = styled(Link)`
  display: flex;
  color: ${colors.dark};
  text-decoration: none;

  & img {
    width: 2.5rem;
  }

  & p {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 800;
    font-style: italic;
  }
`;
