import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import {
  Container,
  CartContent,
  FinalizeButton,
  FinalizeText,
  ProductsList,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  CartActions,
  AmountActions,
  AmountInput,
  SubTotalText,
  Total,
  TotalTitle,
  TotalValue,
  TouchButton,
} from './styles';

import api from '../../services/api';

export default class Cart extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data.splice(3, 3) });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <CartContent>
          <ProductsList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Product>
                <ProductInfo>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductDetails>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductDetails>
                  <TouchButton>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </TouchButton>
                </ProductInfo>
                <CartActions>
                  <AmountActions>
                    <TouchButton>
                      <Icon
                        name="remove-circle-outline"
                        color={colors.primary}
                        size={20}
                      />
                    </TouchButton>
                    <AmountInput value="3" editable={false} />
                    <TouchButton>
                      <Icon
                        name="add-circle-outline"
                        color={colors.primary}
                        size={20}
                      />
                    </TouchButton>
                  </AmountActions>
                  <SubTotalText>R$120,00</SubTotalText>
                </CartActions>
              </Product>
            )}
          />
          <Total>
            <TotalTitle>Total:</TotalTitle>
            <TotalValue>R$1500,00</TotalValue>
          </Total>
          <FinalizeButton>
            <FinalizeText>Finalizar Pedido</FinalizeText>
          </FinalizeButton>
        </CartContent>
      </Container>
    );
  }
}
