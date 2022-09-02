import React from 'react';
import { AppNavbar } from './Navbar';

import './styles/global.css'
import { Rules } from './pages/Rules';
import { Container } from '@mantine/core';

function App() {
  return (
    <div>
      <AppNavbar />

      <Container p={"xl"}>
        <Rules />
      </Container>
    </div>
  );
}

export default App;
