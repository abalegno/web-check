import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { StyledCard } from 'web-check-live/components/Form/Card';
import Heading from 'web-check-live/components/Form/Heading';
import colors from 'web-check-live/styles/colors';

const Header = styled(StyledCard)`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  width: 95vw;
`;

const Nav = (props: { children?: ReactNode}) => {
  return (
    <Header as="header">
    <Heading color={colors.primary} size="large">
      <a href="https://mazediseno.cl/" target="_self"><img width="64" src="https://mazediseno.cl/wp-content/uploads/2024/09/Maze-Icon.svg" alt="Web Check Icon" /></a>
      <a href="/" target="_self">Web Check by Maze</a>
    </Heading>
      {props.children && props.children}
  </Header>
  );
};

export default Nav;
