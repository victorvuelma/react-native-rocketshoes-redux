import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};

  ${props =>
    props.loading
      ? css`
          justify-content: center;
          align-items: center;
        `
      : css``}
`;

export const ProductsList = styled.FlatList.attrs({
  horizontal: true,
})`
  margin: 20px 0 0 20px;
`;

export const Product = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin-right: 15px;
  width: 220px;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.Image`
  background: #eee;
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  margin-top: 10px;
  width: 186px;
  color: #333333;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  width: 186px;
  color: #000;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const ProductButton = styled(RectButton)`
  background: ${colors.primary};
  width: 200px;
  height: 42px;
  margin-top: auto;
  flex-direction: row;
  border-radius: 4px;
`;

export const ButtonCart = styled.View`
  width: 53px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${darken(0.1, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const CartAmount = styled.Text`
  margin-left: 5px;
  font-size: 14;
  color: #fff;
`;

export const AddToCart = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddToCartText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 14;
`;
