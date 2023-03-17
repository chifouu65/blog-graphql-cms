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
  const id = req?.body.idToDelete;
  console.log(id);
  if (id) {
    prisma.post.delete({
      where: {
        id: id,
      },
    })
    .then((data) => {
        res.status(200).json(data as any);
    })
    .catch((err) => {
        res.status(500).json(err as any);
    });
  } else {
    res.status(405).json('Method not allowed' as any);
  }
}
