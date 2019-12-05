import { takeLatest, all, call, put, select } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

function* addToCart({ id }) {
  const productInCart = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const productAmount = productInCart ? productInCart.amount : 0;

  const amount = productAmount + 1;

  if (productInCart) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);

    const product = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(product));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
