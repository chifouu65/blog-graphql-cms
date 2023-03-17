import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components'

import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await fetch('/api/blog/posts')
    const data = await res.json()
    setPosts(data)

    console.log(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

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
