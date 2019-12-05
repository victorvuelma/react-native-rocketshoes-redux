import { takeLatest, all, call, put } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

function* addToCart({ id }) {
  const response = yield call(api.get, `products/${id}`);

  const product = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSuccess(product));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
