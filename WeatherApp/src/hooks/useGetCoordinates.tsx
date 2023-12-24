import {useState, useEffect} from 'react';
import {fetchCoordinates} from '../utils/fetchCoordinates';

const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const handleFetchCoordinates = async () => {
      try {
        const locationCoordinates = await fetchCoordinates();
        if (locationCoordinates) {
          setCoordinates(locationCoordinates);
        }
      } catch (error) {
        console.error('Error getting coordinates:', error);
      }
    };
    handleFetchCoordinates();
  }, []);

  return coordinates;
};

export default useGetCoordinates;
