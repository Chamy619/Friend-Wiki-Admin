const SELECT = 'header/SELECT';

export const select = (item) => ({ type: SELECT, payload: item });

const initialState = {
  current: null,
};

export default function header(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}
