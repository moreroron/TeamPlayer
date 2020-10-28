import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTeams = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        if (err.response) {
          setError(err.response?.data);
        } else {
          setError('Somthing went wrong with the server...');
        }
      }
    };

    fetch();
  }, [url]);

  return { data, error };
};

export default useFetchTeams;
