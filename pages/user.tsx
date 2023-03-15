

// pages/profile.js
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Modal from '../components/Modal';

export default withPageAuthRequired(function Profile({ user }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenCreatePostModal = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
  }

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

        <>
        <h2 className='pt-4 text-gray-900 title-font font-medium pb-2'>
          Vos posts:
        </h2>

        <button 
          onClick={handleOpenCreatePostModal}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un post
        </button>

      { isOpen && 
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} 
        title="Create a new post"
        content=
          {
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Title
                  </label>
                  <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post title..." />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </label>
                  <select className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Post description...">
                  </textarea>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                  <input type="file"/>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                    PNG, JPG, GIF up to 10MB
                  </div>
                </div>
              </form>
            </>
          }
          btn={
            <>
              <button
              onSubmit={handleSubmit}
              data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Finish and publish
              </button>
              <button 
              onClick={handleOpenCreatePostModal}
              data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Cancel and close
              </button>
            </>
          }
      /> 
      }

        <div className="container grid grid-cols-1 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h2 className=' text-gray-900 title-font font-medium pb-2'>
                  Titre du post
                </h2>
                <div className="flex flex-row gap-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Modifier
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Supprimer
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm pt-2 max-w-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl nec tincidunt luctus, nunc nisl aliquet nunc, et
              </p>
            </div>
          </div>
        </ div>
        </>
      </div>
    </>
    
  )
});