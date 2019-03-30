import { FETCH_INSTRUMENTS } from '../action';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INSTRUMENTS:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
