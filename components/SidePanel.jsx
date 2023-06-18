import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { app } from './firebaseConfig'
import { collection, query, getDocs, getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore'

const db = getFirestore(app)
const imageSrc = 'yumi.png'

const SidePanel = () => {  
  return (
    <div className="w-72 h-screen flex flex-col p-3 shadow sticky top-0">
      <div className="space-y-3">
        <div className="flex items-center justify-center bg-white rounded-lg px-4 py-4 transition duration-400 hover:cursor-pointer">
          <Link href='/' className='flex'>
            <img src='MindPalette.png' className='h-8' />
          </Link>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-xl relative text-gray-900">
            <li className="rounded-md transition duration-400 hover:text-red-700 w-full"
            // onClick={logOut}
            >
              <button
                className="flex justify-start items-center p-2 space-x-3 rounded-md w-full"
              >
                <img
                  src={imageSrc}
                  className='h-10 w-10 rounded-full object-cover'
                />
                <span className="justify-self-end"> Yumi Hiroko </span>
              </button>
            </li>
            <li className="rounded-md transition duration-400 text-red-700">
              <a
                href="./dashboard"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="">Home</span>
              </a>
            </li>
            {/* <li className="rounded-md transition duration-400 hover:text-red-700">
              <a
                href="./explore"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="">
                  Explore
                </span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidePanel


