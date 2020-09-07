import React from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

import { Container, Content } from './styles';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Card from '~/components/Card';
import Tabs from '~/components/Tabs';

const Home: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  function handleGestureStateChange(event: PanGestureHandlerStateChangeEvent) {
    let opened = false;

    // If user finished the animation
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 70) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu
          style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            }),
          }}
        />

        <Card
          animatedEvent={animatedEvent}
          handleGestureStateChange={handleGestureStateChange}
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-250, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </Content>

      <Tabs
        style={{
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          }),
        }}
      />
    </Container>
  );
};

export default Home;
