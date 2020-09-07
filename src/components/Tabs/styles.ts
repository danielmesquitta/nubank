import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 120px;
  margin-top: 20px;
`;

export const Content = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
})``;

export const TabContainer = styled.View`
  width: 100px;
  height: 100px;
  background: #fff3;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: #fff;
`;
