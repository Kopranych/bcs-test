import { FETCH_QUOTE, FETCH_ALL_INSTRUMENTS } from '../action';

const initialState = {
  instruments: [],
  selectedInstruments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_INSTRUMENTS:
      return {
        ...state,
        instruments: payload,
      };
    case FETCH_QUOTE:
      return {
        ...state,
        selectedInstruments: [...state.selectedInstruments, payload],
      };
    default:
      return state;
  }
};
