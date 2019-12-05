import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductsList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ButtonCart,
  CartAmount,
  AddToCart,
  AddToCartText,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({
      products: response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      })),
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;

    return (
      <Container loading={loading}>
        {loading ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : (
          <View>
            <ProductsList
              data={products}
              keyExtractor={product => product.id}
              renderItem={({ item }) => (
                <Product>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                  <ProductButton>
                    <ButtonCart>
                      <Icon name="add-shopping-cart" color="#fff" size={16} />
                      <CartAmount>1</CartAmount>
                    </ButtonCart>
                    <AddToCart>
                      <AddToCartText>Adicionar</AddToCartText>
                    </AddToCart>
                  </ProductButton>
                </Product>
              )}
            />
          </View>
        )}
      </Container>
    );
  }
}
