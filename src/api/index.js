import request from 'superagent';

const fetchInstrumentsApi = async () => {
  const response = await request.get(' https://api.iextrading.com/1.0/ref-data/symbols');
  return response.body;
};
export default fetchInstrumentsApi;
