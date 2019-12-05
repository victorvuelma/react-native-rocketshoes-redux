import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
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
  CartOptions,
  AmountActions,
  AmountInput,
  SubTotalText,
  Total,
  TotalTitle,
  TotalValue,
  TouchButton,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  const increaseAmount = product => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  const decreaseAmount = product => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  return (
    <Container>
      <CartContent>
        {products.length ? (
          <>
            <ProductsList
              data={products}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <Product>
                  <ProductInfo>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductDetails>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </ProductDetails>
                    <TouchButton onPress={() => removeFromCart(item.id)}>
                      <Icon
                        name="delete-forever"
                        size={24}
                        color={colors.primary}
                      />
                    </TouchButton>
                  </ProductInfo>
                  <CartOptions>
                    <AmountActions>
                      <TouchButton onPress={() => decreaseAmount(item)}>
                        <Icon
                          name="remove-circle-outline"
                          color={colors.primary}
                          size={20}
                        />
                      </TouchButton>
                      <AmountInput value={String(item.amount)} />
                      <TouchButton onPress={() => increaseAmount(item)}>
                        <Icon
                          name="add-circle-outline"
                          color={colors.primary}
                          size={20}
                        />
                      </TouchButton>
                    </AmountActions>
                    <SubTotalText>{item.subTotalFormatted}</SubTotalText>
                  </CartOptions>
                </Product>
              )}
            />
            <Total>
              <TotalTitle>Total:</TotalTitle>
              <TotalValue>{total}</TotalValue>
            </Total>
            <FinalizeButton>
              <FinalizeText>Finalizar Pedido</FinalizeText>
            </FinalizeButton>
          </>
        ) : (
          <EmptyContainer>
            <EmptyText>Não há produtos no carrinho.</EmptyText>
          </EmptyContainer>
        )}
      </CartContent>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subTotalFormatted: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
