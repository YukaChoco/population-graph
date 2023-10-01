import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { API_HEADERS } from '@/const';
import { GetPopulation } from '@/types/Population';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { prefCode } = req.query;
    const apiUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;

    const response = await axios.get<GetPopulation>(apiUrl, API_HEADERS);

    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
