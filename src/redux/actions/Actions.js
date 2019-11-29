import * as types from '../constants/ActionTypes';

export const onItemsRequest = () => ({
  type: types.ITEMS_REQUESTED
});

export const onItemsRequestSuccess = (result) => ({
  type: types.ITEMS_REQUEST_SUCCESS,
  result
});

export const onItemsRequestFailure = (errorMessage) => ({
  type: types.ITEMS_REQUEST_FAILURE,
  errorMessage
});

export const onItemsDeleteRequest = (id) => ({
  type: types.ON_ITEM_DELETE_REQUEST,
  id
});

export const onItemsUpdateRequest = (item) => ({
  type: types.ON_ITEM_UPDATE_REQUEST,
  item
});