import { FETCH_INSTRUMENT, FETCH_ALL_INSTRUMENTS } from '../action';

const initialState = {
  instruments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_INSTRUMENTS:
      return {
        ...state,
        instruments: payload,
      };
    case FETCH_INSTRUMENT:
      return {
        ...state,
        instrument: payload,
      };
    default:
      return state;
  }
};
