import styled from 'styled-components/native';

import logo from '../../assets/Logo.png';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  height: 64;
  background: ${colors.dark};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 30px 0 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const LogoTouch = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ProductCount = styled.Text`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 12;
  text-align: center;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;
