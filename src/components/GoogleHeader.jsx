import React from 'react'

function GoogleHeader() {
  return (
      <header className="flex justify-between w-11/12 mt-3">
          <div className="flex justify-between items-center w-1/2 h-7">
            <img className="w-5 h-5" src="/lines.svg" alt="three horizontal lines" />
            <img className="w-5 h-5" src="/beaker.svg" alt="beaker" />
            <p className="text-blue-600 text-xs font-bold border-b-2 border-blue-600 h-7 mt-3 w-8 text-center">ALL</p>
            <p className="text-xs text-gray-600 font-bold">IMAGES</p>
          </div>
          <div className="flex justify-between items-center w-1/3 h-7">
            <img className="w-5 h-5" src="/bell.svg" alt="three horizontal lines" />
            <img className="w-5 h-5" src="/grid.svg" alt="beaker" />
            <img className="w-9 h-9" src="/user-profile.png" alt="beaker" />
          </div>
        </header>
  )
}

export default GoogleHeader
