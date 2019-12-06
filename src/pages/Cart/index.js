import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotalFormatted: formatPrice(product.price * product.amount),
    })),
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.amount * product.price;
      }, 0),
    ),
  );

  const dispatch = useDispatch();

  function increaseAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decreaseAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartContent>
        {cart.length ? (
          <>
            <ProductsList
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({ item }) => (
                <Product>
                  <ProductInfo>
                    <ProductImage source={{ uri: item.image }} />
                    <ProductDetails>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </ProductDetails>
                    <TouchButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
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
