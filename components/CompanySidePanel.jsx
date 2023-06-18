import React, {useEffect, useState} from 'react'
import Link from 'next/link'

const CompanySidePanel = () => {  
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
                  src='company.png'
                  className='h-10 w-10 rounded-full object-cover'
                />
                <span className="justify-self-end"> AI Company </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CompanySidePanel


