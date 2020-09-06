import React from 'react';

import { Container, Content } from './styles';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Card from '~/components/Card';
import Tabs from '~/components/Tabs';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card />
      </Content>
      <Tabs />
    </Container>
  );
};

export default Home;
