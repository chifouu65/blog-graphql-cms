

// pages/profile.js
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import {CardAdmin, Modal, Form } from '../components';

export default withPageAuthRequired(function Profile({ user })   {
  const [isOpen, setIsOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]); // [1]
  const [learnMore, setLearnMore] = React.useState(false); // [1
  
  const handleMore = () => {
    setLearnMore(!learnMore);
  }
  const getPosts = async () => {
    //filter posts by authorId
    const res = await fetch('/api/blog/posts')
    if (res.status === 200) {
      const data = await res.json()
      setPosts(data)
    } else {
      console.log('error')
    }
  } 

  const handleOpenCreatePostModal = () => {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    getPosts()
  }, [user])

  React.useEffect(() => {
    const userSub = user?.sub
    const filteredPosts = posts.filter((post: any) => post.authorId === userSub)
    setFilteredPosts(filteredPosts)
  }, [posts])

  return (
    <>
      <div className="container">
        <div className="flex flex-col">
          <img className='rounded-full h-10 w-10' src={user.picture as string} alt={user.name as string} />
          <div className="flex flex-col">
            {
              user.name && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Name: <span className="text-gray-600">{user.name as string}</span>
              </h2>
            }
           {
              user.email && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Email: <span className="text-gray-600">{user.email as string}</span>
              </h2>
           }
           {
              user.nickname && <h2 className=' text-gray-900 title-font font-medium pb-2'>
                Nickname: <span className="text-gray-600">{user.nickname as string}</span>
              </h2>
           }
          </div>
        </div>
      </div>
      
      <button 
          onClick={handleOpenCreatePostModal}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un post
      </button>
        
      {
        isOpen &&
        <Modal 
          title="Ajouter un post"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          content={
            <Form/>
          }
        >
        </Modal>
      }
        <>
        <h2 className='pt-4 text-gray-900 title-font font-medium pb-2'>
          Vos posts:
        </h2>
        <div className="flex flex-wrap -m-4">
          <CardAdmin posts={filteredPosts} />
        </div>
        </>
      
    </>
    
  )
});
