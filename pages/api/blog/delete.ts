// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  if (req.method === 'POST') {
    console.log(
      `Deleting post with id: ${req.body.id}`
    );
    prisma.post.deleteMany({
      where: {
        id: req.body.id,
      },
    })
    .then((data) => {
      res.status(200).json(data as any);
    })
    .catch((err) => {
      res.status(500).json(err as any);
    });
  }
}
