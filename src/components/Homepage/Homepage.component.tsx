import React, { useState } from 'react';
import { Header } from '../Header/Header.component'
import { MainContent } from '../MainContent/MainContent.component'
import { StyledApp } from './Homepage.styles';

const Homepage: React.FC = () => {
 
  return (
    <StyledApp>
      <Header />
      <MainContent />
    </StyledApp>
  );
}

export default Homepage;
