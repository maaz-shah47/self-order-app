import { ORDER_SET_TYPE } from '../constants/Constants';

export const setOrderType = (dispatch, orderType) => {
  dispatch({
    type: ORDER_SET_TYPE,
    payload: orderType,
  });
};
