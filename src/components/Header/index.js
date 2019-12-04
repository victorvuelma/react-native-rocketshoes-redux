import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Icon name="shopping-basket" size={24} color="#FFF" />
      </Container>
    </Wrapper>
  );
}
