import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <footer>
      footer
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        Top area: Blocks
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          1st block
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              Logo
              <Link href="/" className="inline-block">
                <img src="logo.png" className="h-10 w-18" />
              </Link>
            </div>
            {/* <div className="text-sm text-gray-600">
              <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer