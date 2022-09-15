import { createContext, useReducer } from 'react';
import { ORDER_SET_TYPE } from '../constants/Constants';

export const Store = createContext({
  order: {
    orderType: '',
  },
});

const INITIAL_STATE = {
  order: {
    orderType: 'Eat in',
  },
};

const orderReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_SET_TYPE:
      return {
        ...state,
        order: { ...state.order, orderType: payload },
      };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(orderReducer, INITIAL_STATE);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
