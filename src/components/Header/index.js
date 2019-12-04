import React from 'react';
import { Image } from 'react-native';

import Logo from '../../assets/Logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={Logo} height={24}></Image>
    </Container>
  );
}
