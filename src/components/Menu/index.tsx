import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-generator';

import {
  Container,
  Code,
  Nav,
  ItemContainer,
  ItemText,
  Button,
  ButtonText,
} from './styles';

interface INavItemProps {
  icon: string;
  text: string;
}

const Menu: React.FC = () => {
  const NavItem: React.FC<INavItemProps> = ({ icon, text }) => {
    return (
      <ItemContainer>
        <MaterialIcons name={icon} size={20} color="#FFF" />
        <ItemText>{text}</ItemText>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <Code>
        <QRCode
          value="https://github.com/danielmesquitta"
          size={80}
          fgColor="#fafafa"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem icon="help-outline" text="Me ajuda" />
        <NavItem icon="person-outline" text="Perfil" />
        <NavItem icon="credit-card" text="Configurar cartão" />
        <NavItem icon="smartphone" text="Configurar app" />
      </Nav>

      <Button>
        <ButtonText>Sair do App</ButtonText>
      </Button>
    </Container>
  );
};

export default Menu;
