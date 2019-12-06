import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  LogoTouch,
  BasketContainer,
  ProductCount,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <LogoTouch onPress={() => navigation.goBack()}>
          <Logo />
        </LogoTouch>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ProductCount>{cartSize}</ProductCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
