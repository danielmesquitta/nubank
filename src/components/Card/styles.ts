import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fafafa;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  overflow: hidden;

  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Balance = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const Footer = styled.View`
  padding: 30px;
  background: #eee;
`;

export const LastNotification = styled.Text`
  font-size: 12px;
  color: #333;
`;
