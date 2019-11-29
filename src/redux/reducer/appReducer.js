import * as types from '../constants/ActionTypes';

const initialState = {
  listing: {
    listingError: '',
    items: [],
    isLoading: false
  },
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case types.ITEMS_REQUESTED:
        return {
          ...state,
          listing: {
            ...state.listing,
            listingError: '',
            items: [],
            isLoading: true
          }
        };  
    case types.ITEMS_REQUEST_SUCCESS:
      return {
        ...state,
        listing: {
          ...state.listing,
          listingError: '',
          items: action.result,
          isLoading: false
        }
      };
    case types.ITEMS_REQUEST_FAILURE:
      return {
        ...state,
        listing: {
          ...state.listing,
          items: action.errorMessage,
          isLoading: false
        }
      };
    case types.ON_ITEM_DELETE_REQUEST:
      return {
        ...state,
        listing: {
          ...state.listing,
          items: deleteItem(action.id, state.listing.items),
          isLoading: false
        }
      };
    case types.ON_ITEM_UPDATE_REQUEST:
      return {
        ...state,
        listing: {
          ...state.listing,
          items: action.item,
          isLoading: false
        }
      };
    default:
      return state;
  }
};

const deleteItem = (id, items) => {
  var index = items.map(x => {
    return x.id;
  }).indexOf(id);
  
  items.splice(index, 1);
  return items;
}
