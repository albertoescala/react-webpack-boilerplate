import React from 'react';
import styled from 'styled-components';
import { LogoCard } from 'components';

const CoverPageContainer = styled.div`
  display: flex;
  width: auto;
  height: 200px;
  background: linear-gradient(to bottom, #0d2642 0%, #4e8391 100%);
  justify-content: center;
`;

const CoverPage = () => (
  <CoverPageContainer>
    <LogoCard />
  </CoverPageContainer>
);

export default CoverPage;
