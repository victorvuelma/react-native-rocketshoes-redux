import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productAmount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(
        response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        })),
      );
      setLoading(false);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container loading={loading}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : (
        <View>
          <ProductsList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Product>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <ProductButton onPress={() => handleAddProduct(item.id)}>
                  <ButtonCart>
                    <Icon name="add-shopping-cart" color="#fff" size={16} />
                    <CartAmount>{productAmount[item.id] || 0}</CartAmount>
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
