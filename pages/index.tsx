import type { NextPage } from 'next'
import Head from 'next/head'

const posts = [
  {
    by: 'John Doe',
    id: 1,
    title: 'My first post',
    content: 'Hello world!',
    createdAt: new Date(),
  },
  {
      by: 'John Doe',
      id: 1,
      title: 'My second post',
      content: 'Hello guys!',
      createdAt: new Date(),
  }
]

const Home: NextPage = () => {
  return (
    <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        main
    </>
  )
}

export default Home
