import React, { useState, useEffect } from 'react';

export default function usePrefectures() {
  const [prefectures, setPrefectures] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/prefecture');
        const result = await response.json();
        setPrefectures(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return { prefectures };
}
