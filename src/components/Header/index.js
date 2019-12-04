import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ProductCount,
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ProductCount>2</ProductCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
