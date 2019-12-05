import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ProductCount,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ProductCount>2</ProductCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
