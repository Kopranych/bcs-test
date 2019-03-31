import request from 'superagent';

export const getAll = async () => {
  const response = await request.get('https://api.iextrading.com/1.0/ref-data/symbols');
  return response.body;
};

export const get = async (ticker) => {
  const response = await request.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`);
  return response.body;
};
