import fetchInstrumentsApi from '../api';

export const FETCH_INSTRUMENTS = 'FETCH_INSTRUMENTS';
export const FETCH_INSTRUMENTS_SUCCESS = 'FETCH_INSTRUMENTS_SUCCESS';
export const FETCH_INSTRUMENTS_FAILURE = 'FETCH_INSTRUMENTS_FAILURE';


export const fetchInstruments = () => async (dispatch) => {
  dispatch({
    type: FETCH_INSTRUMENTS,
    payload: await fetchInstrumentsApi(),
  });
};
