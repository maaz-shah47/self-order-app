import { createContext, useReducer } from 'react';
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  ORDER_SET_TYPE,
} from '../constants/Constants';

export const Store = createContext({
  categoryList: { categories: [], loading: true },
  order: {
    orderType: '',
  },
});

const INITIAL_STATE = {
  categoryList: { categories: [], loading: true },
  order: {
    orderType: 'Eat in',
  },
};

const orderReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_LIST_REQUEST:
      return { ...state, categoryList: { ...state, loading: true } };
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: { loading: false, categories: payload },
      };
    case CATEGORY_LIST_FAIL:
      return {
        ...state,
        categoryList: { loading: false, error: payload },
      };
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
