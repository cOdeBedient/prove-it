import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col items-center">
        <div className="flex w-full justify-center">
            <h2 className="text-4xl font-bold font-serif tracking-tight mt-1">404</h2>
            <h2 className="text-4xl font-bold font-serif tracking-tight ml-2 mt-2">Not Found</h2>
        </div>
            <p className="mt-8 text-wrap border-t border-gray-400 pt-3 w-11/12">The requested URL was not found on this server.</p>
        <Link className="text-center h-8 mt-2" to='/'>
            <button className="bg-gray-100 w-fit px-4 py-1 rounded text-xs font-regular h-8 mt-4">Return Home</button>
        </Link>
    </div>
  )
}

export default Error
