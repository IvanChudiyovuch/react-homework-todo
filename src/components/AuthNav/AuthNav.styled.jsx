import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: #2a363b;

  :active {
    color: #e84a5f;
  }
`;
