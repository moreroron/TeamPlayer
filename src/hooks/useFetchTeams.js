import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTeams = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            'X-Auth-Token': '83dbbf606d274eb085fa5569a0b436d1',
          },
        });

        setData(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };

    fetch();
  }, [url]);

  return { data, error };
};

export default useFetchTeams;
