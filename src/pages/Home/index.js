import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class Home extends Component {
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

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
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <Product>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                  <ProductButton onPress={() => this.handleAddProduct(item.id)}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
