import { useEffect, useState } from 'react';
import usePrefectures from './usePrefectures';

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false);

  return { loading, setLoading };
}
