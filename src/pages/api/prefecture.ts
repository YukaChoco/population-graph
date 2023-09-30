// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { API_HEADERS } from '@/const';
// import type Prefecture from '@/types/Prefecture';

// type Data = {
//   result: Prefecture[];
// };

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>,
  res: NextApiResponse,
) {
  try {
    const apiUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

    const response = await axios.get(apiUrl, API_HEADERS);

    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
