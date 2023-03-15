import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components'

const posts = [
  {
    by: 'John Doe',
    id: "1",
    title: 'My first post',
    img: "https://images.unsplash.com/photo-1610392347869-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    content: 'Hello world!',
    createdAt: new Date(),
  },
  {
      by: 'John Doe',
      id: "1",
      title: 'My second post',
      img: "https://images.unsplash.com/photo-1610392347869-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
        <div className="container grid
            grid-cols-1 gap-6 px-6 py-8 mx-auto sm:grid-cols-2 lg:grid-cols-3"> 
            <Card posts={posts} />
        </div>
    </>
  )
}

export default Home
