import React from 'react'

function Announcement() {
  return (
    <div className="h-10 bg-gray-900 px-5 grid-flow-row flex items-center ">
        <div className="flex flex-wrap items-center flex-row justify-start w-1/2 md:pl-80">
          <img src="../public/logo-fb.png" alt="" className="h-4 md:ml-16 mr-5 md:pl-80" />
          <img
            src="../public/instagram-white-icon.png"
            alt=""
            className="h-4"
          />
        </div>
        <p className="text-white text-sm justify-center ">Remates</p>
        <img src="../public/arrow-icon.png" alt="" className='h-5 ml-1'/>
      </div>
  )
}

export default Announcement