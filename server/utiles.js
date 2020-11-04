const axios = require('axios');

const fetchFromApi = async (url, token) => {
  let res = { data: null, error: null };
  try {
    const { data } = await axios.get(url, { headers: { 'X-Auth-Token': token } });
    return { ...res, data };
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return { ...res, error: { status, message: data.message } };
    } else {
      return { ...res, error: { status: 500, message: 'No response from API server' } };
    }
  }
};

module.exports = { fetchFromApi };
