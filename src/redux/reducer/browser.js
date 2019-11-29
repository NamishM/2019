import { createResponsiveStateReducer } from 'redux-responsive';

const browserReducer = createResponsiveStateReducer({
  // overrides are set using max values for breakpoints
  extraSmall: 575,
  small: 767,
  medium: 991,
  large: 1199,
  extraLarge: 5000, // unrealistic res-size, used to prevent "mediaType:'infinity'"
});

const browserStateExtension = (state = {mediaType: ''}, action) => {
  switch (action.type) {
    case 'redux-responsive/CALCULATE_RESPONSIVE_STATE':
      return Object.assign({}, state, {
        screenLayout: (state.mediaType === 'extraSmall' || state.mediaType === 'small')
          ? 'mobile' : (state.mediaType === 'medium') ? 'tablet' : 'desktop',
        width: action.innerWidth,
        height: action.innerHeight,
        // drawersVisible: (state.mediaType === 'large' || state.mediaType === 'extraLarge'),
      });
    default:
      return state;
  }
};

export const browser = (state, action) => {
// daisy-chaining the responsive-state reducer into our custom one so we can extend it's state
const newState = browserReducer(state, action);
return browserStateExtension(newState, action);
};