import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.gray};
`;

export const TouchButton = styled.TouchableOpacity``;

export const CartContent = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px 20px 0 20px;
  padding: 22px 15px 10px 22px;
`;

export const ProductsList = styled.FlatList``;

export const Product = styled.View`
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  background: #eee;
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex-direction: column;
  margin: 0 10px;

  flex: 1;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #333;
  font-size: 14;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: #000;
`;

export const CartActions = styled.View`
  margin-top: 10px;
  background: #eeeeee;
  flex: 1;
  height: 40;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AmountActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput`
  margin: 0 5px;
  background: #fff;
  font-size: 14px;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 12px 0 12px;
  width: 51px;
`;

export const SubTotalText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16;
`;

export const Total = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const TotalTitle = styled.Text`
  color: #999;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalValue = styled.Text`
  margin-top: 5px;
  color: #000;
  font-size: 30px;
  font-weight: bold;
`;

export const FinalizeButton = styled(RectButton)`
  background: ${colors.primary};
  width: 315px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const FinalizeText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
