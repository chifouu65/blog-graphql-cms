import { AiFillGithub } from 'react-icons/ai'

function Footer() {
    return (
        <footer>
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-900">
                  <AiFillGithub size={24}/>
                  <span className="sr-only">GitHub page</span>
              </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer