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
        <div className="flex flex-wrap -m-4"> 
            <Card posts={posts} />
        </div>
    </>
  )
}

export default Home
