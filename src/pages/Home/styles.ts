import styled from 'styled-components/native';

import Background from '~/styles/Background';

export const Container = styled(Background)`
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  z-index: 5;
  max-height: 400px;
`;
