// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  //get all posts
    if (req.method === 'GET') {
        console.log('GET');
        await prisma.post.findMany()
        .then((data) => {
            res.status(200).json(data as any);
        })
        .catch((err) => {
            res.status(500).json(err as any);
        });
        //create a post
    } 
}
