import React from 'react';
import styled from 'styled-components';
import { Logo, Label } from 'components';

const LogoCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoCard = () => (
  <LogoCardContainer>
    <Logo />
    <Label>React Webpack Boilerplate</Label>
  </LogoCardContainer>
);

export default LogoCard;
