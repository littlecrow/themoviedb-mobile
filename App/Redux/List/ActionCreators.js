import ActionTypes from './ActionTypes';

export const setItemsPerRow = (quantity) => ({
  type: ActionTypes.SET_ITEMS_PER_ROW,
  payload: quantity
});

export default {
  setItemsPerRow
};
