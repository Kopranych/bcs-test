import { getAll, get } from '../api';

export const FETCH_ALL_INSTRUMENTS = 'FETCH_ALL_INSTRUMENTS';
export const FETCH_INSTRUMENTS_SUCCESS = 'FETCH_INSTRUMENTS_SUCCESS';
export const FETCH_INSTRUMENTS_FAILURE = 'FETCH_INSTRUMENTS_FAILURE';
export const FETCH_QUOTE = 'FETCH_QUOTE';


export const fetchAllInstruments = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_INSTRUMENTS,
    payload: await getAll(),
  });
};
export const fetchQuote = ticker => async (dispatch) => {
  dispatch({
    type: FETCH_QUOTE,
    payload: await get(ticker),
  });
};
