import { useEffect, useState } from 'react';
import yelp from '../components/yelp';

export default () => {
  [library, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 10,
          term: 'library',
          location: 'salt lake city',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return [searchApi, library];
};
