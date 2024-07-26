import React from 'react'
import GoogleHeader from './GoogleHeader'
import { Link } from 'react-router-dom'

function Info() {

  return (
    <section className="bg-white h-screen flex flex-col items-center w-full">
        <GoogleHeader />
        <ol className="mt-10 w-10/12 text-sm/4 text-wrap pl-5 list-decimal space-y-3">
            <li>Come up with a fake fact.</li>
            <li>Enter the question you would send to google if you were to search the fact.</li>
            <li>Click "Submit Question".</li>
            <li>Enter concise, falsified answer to the question.</li>
            <li>click "Prove it!"</li>
            <li>Wait while your answer is being generated.</li>
            <li>Turn your phone around and show it to your friend and tell them you were right!</li>
        </ol>
        <Link className="text-center h-8 mt-2" to='/'>
            <button className="bg-gray-100 w-fit px-4 py-1 rounded text-xs font-regular h-8 mt-4">Return Home</button>
        </Link>
    </section>
  )
}

export default Info
