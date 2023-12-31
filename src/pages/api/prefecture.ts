import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import type { GetPrefecture } from '@/types/Prefecture';
import { API_HEADERS } from '@/const';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const apiUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

    const response = await axios.get<GetPrefecture>(apiUrl, API_HEADERS);

    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
