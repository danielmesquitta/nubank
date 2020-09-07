import React from 'react';
import { Animated, ViewProps } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
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

interface ICardProps extends Animated.AnimatedProps<ViewProps> {
  animatedEvent: (...args: any[]) => void;
  handleGestureStateChange: (event: PanGestureHandlerStateChangeEvent) => void;
}

const Card: React.FC<ICardProps> = ({
  animatedEvent,
  handleGestureStateChange,
  ...rest
}) => {
  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={handleGestureStateChange}
    >
      <Container {...rest}>
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
    </PanGestureHandler>
  );
};

export default Card;
