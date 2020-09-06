import React from 'react';
import { StatusBar } from 'react-native';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Home />
    </>
  );
};

export default App;
