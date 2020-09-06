import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Content,
  Title,
  Balance,
  Footer,
  LastNotification,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <MaterialIcons name="attach-money" size={28} color="#666" />
        <MaterialIcons name="visibility-off" size={28} color="#666" />
      </Header>
      <Content>
        <Title>Saldo disponível</Title>
        <Balance>R$ 134.675,50</Balance>
      </Content>
      <Footer>
        <LastNotification>
          Transferência de R$ 15.000,00 recebido de NASA
        </LastNotification>
      </Footer>
    </Container>
  );
};

export default Card;
