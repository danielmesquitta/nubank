import React from 'react';
import { Animated, ViewProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, TabContainer, Text } from './styles';

interface ITabsProps extends Animated.AnimatedProps<ViewProps> {}

interface ITabProps {
  icon: string;
  text: string;
}

const Tabs: React.FC<ITabsProps> = ({ ...rest }) => {
  const Tab: React.FC<ITabProps> = ({ icon, text }) => {
    return (
      <TabContainer>
        <MaterialIcons name={icon} color="#fff" size={20} />
        <Text>{text}</Text>
      </TabContainer>
    );
  };

  return (
    <Container {...rest}>
      <Content>
        <Tab icon="person-add" text="Indicar amigos" />
        <Tab icon="chat-bubble-outline" text="Cobrar" />
        <Tab icon="arrow-downward" text="Depositar" />
        <Tab icon="arrow-upward" text="Transferir" />
        <Tab icon="lock" text="Bloquear cartão" />
      </Content>
    </Container>
  );
};

export default Tabs;
