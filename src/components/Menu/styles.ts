import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentConatinerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  margin: 0 auto;
  padding: 5px;
  overflow: hidden;
`;

export const Nav = styled.View`
  margin-top: 30px;
`;

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #fff3;
`;

export const ItemText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const Button = styled.TouchableOpacity`
  border-width: ${3 * StyleSheet.hairlineWidth}px;
  border-color: #fff3;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
