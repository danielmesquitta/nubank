import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

import logo from '~/assets/Nubank_Logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Daniel</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" color="#fff" size={20} />
    </Container>
  );
};

export default Header;
