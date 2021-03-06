const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = (loadingType) => ({ type: START_LOADING, payload: loadingType });
export const finishLoading = (loadingType) => ({ type: FINISH_LOADING, payload: loadingType });

const initialState = {};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, [action.payload]: true };
    case FINISH_LOADING:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
}
