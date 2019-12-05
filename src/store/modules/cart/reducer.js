import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      const { id, amount } = action;

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        }
      });
    }
    case '@cart/REMOVE': {
      const { id } = action;

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    }
    default:
      return state;
  }
}
