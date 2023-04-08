import React from 'react'
import { Signup, Header } from '../components'
import { googleSignUp } from '../components/api/auth'
import Link from 'next/link'
import 'animate.css'

const signup = () => {
  return (
    <div className='flex h-screen'>
      {/* <div className='flex flex-initial mx-auto flex-col bg-white rounded-2xl justify-center px-4 sm:px-6 sm:max-w-lg lg:flex-none lg:px-20'> */}
      <div className="animate__animated animate__fadeInUp md:w-full sm:w-full px-4 sm:px-6 lg:px-20 m-auto bg-white rounded-2xl sm:max-w-lg ">
        <div className="flex w-full lg:w-96 mx-auto justify-center mb-5">
          <a href="/">
            <img
              src="logo.png"
              height="75"
              width="150"
              className="object-center hover:cursor-pointer"
            />
          </a>
        </div>
        <h1 className="text-4xl font-semibold text-center text-orange-500 mb-8">
          Create An Account!
        </h1>

        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center w-full p-4 border bg-neutral-800 border-gray-600 rounded-md hover:bg-neutral-700 shadow-sm"
            onClick={() => googleSignUp()}
          >
            <div className='mx-auto flex'>
              <svg className="flex h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <p className="flex ml-2 text-lg text-white">Sign up with Google</p>
            </div>

          </button>
        </div>

        {/* <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        <form className="mt-6">
          <div className="mb-2">
            <label
              className="block text-lg font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-lg font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-600 bg-white border rounded-md focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-lg font-semibold text-gray-800"
            >
              Re-enter Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-600 bg-white border rounded-md focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 text-lg tracking-wide text-white transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
              Sign Up
            </button>
          </div>
        </form> */}

        <p className="mt-8 text-lg text-center text-gray-700">
          Already have an account? {" "}
          <Link
            href="/login"
            className="font-medium text-orange-500 hover:underline"
          >
            Log in
          </Link>
        </p>

      </div>
      {/* </div> */}
      <div className='relative hidden md:visible lg:visible w-0 flex-1 lg:block'>
        <img
          className='animate__slow absolute inset-0 h-full w-full object-cover'
          src='pxfuel.jpg'
        />
      </div>
    </div>
  )
}

export default signup