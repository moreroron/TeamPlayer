const axios = require('axios');

const fetchFromApi = async (url, token) => {
  let res = { data: null, error: null };
  try {
    const { data } = await axios.get(url, { headers: { 'X-Auth-Token': token } });
    return { ...res, data };
  } catch (error) {
    const { status, data } = error.response;
    if (status === 429) {
      return { ...res, error: { status, message: data.message } };
    } else {
      return { ...res, error: { status, message: data.error } };
    }
  }
};

module.exports = { fetchFromApi };
