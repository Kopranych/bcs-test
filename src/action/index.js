import { getAll, get } from '../api';

export const FETCH_ALL_INSTRUMENTS = 'FETCH_ALL_INSTRUMENTS';
export const FETCH_INSTRUMENTS_SUCCESS = 'FETCH_INSTRUMENTS_SUCCESS';
export const FETCH_INSTRUMENTS_FAILURE = 'FETCH_INSTRUMENTS_FAILURE';
export const FETCH_INSTRUMENT = 'FETCH_INSTRUMENT';


export const fetchAllInstruments = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_INSTRUMENTS,
    payload: await getAll(),
  });
};
export const fetchInstrument = ticker => async (dispatch) => {
  dispatch({
    type: FETCH_INSTRUMENT,
    payload: await get(ticker),
  });
};
