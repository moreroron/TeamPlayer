import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTeams = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(url, { headers: { 'X-Auth-Token': '3c9c206578d141ae8483bd451daa819e' } });
        setData(data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };

    fetch();
  }, [url]);

  return { data, error };
};

export default useFetchTeams;
