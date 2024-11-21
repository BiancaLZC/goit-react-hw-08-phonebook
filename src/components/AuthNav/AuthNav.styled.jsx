import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 20px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;