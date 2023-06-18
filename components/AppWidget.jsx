import React from 'react'

const AppWidget = ({appData}) => {
  return (
    <div className="flex h-28 w-28 container hover:cursor-pointer">
      <div className=''>
        <img
          src = {appData.logo}
          className="object-cover shadow-lg rounded-xl border-black-500"
        />
      </div>
    </div>
  )
}

export default AppWidget