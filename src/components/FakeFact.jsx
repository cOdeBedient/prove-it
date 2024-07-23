import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {getFact} from "../apiCalls"
import '@material/web/button/outlined-button.js'
import '@material/web/tabs/primary-tab.js'
import '@material/web/elevation/elevation.js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function FakeFact(props) {
  const [answer, setAnswer] = useState("Here's the answer!")
  const location = useLocation()
  let formData
  // formData = location ? location.state : null

  

  const generateFact = async () => {
    console.log("formData", formData.formData)
    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "you are a search engine that returns a two-sentence answer to a question using the fake fact provided by the user instead of the real fact"
          },
          {
            role: "user", content: `The question is ${formData.formData.question} and the fact is ${formData.formData.answer}`
          }
        ]
      }

      const result = await getFact(data)
      
      if(result) {
        const fact = result.choices[0].message.content
        setAnswer(fact)
      }
    } catch (error) {
      console.error('Error generating fact:', error)
      setAnswer('Failed to generate fact.')
    }
  }

  useEffect(() => {
    formData ? generateFact() : setAnswer('You have not submitted and answer. Here is the default answer to use for page styling.<br></br>Feel free to use this space to detirmine how things should be styled.<br></br>Because the landspeed of an African swallow is pretty darn slow! Or are they fast? I do not know much about biology, or I suppose ecology. Is studying birds a part of ecology? I know its ornithology, but I also think its part of ecology. Or at least a part of being a naturalist. Or at least a part of being an interesting person.')
  }, [])



  return (
    <main className="w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center h-2/3 mb-3 bg-white relative">
        {/* <header>
          <img src="/lines.png" alt="three horizontal lines" />
          <img src="/beaker.png" alt="beaker" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/bell-logo.png" alt="bell logo" />
        </header> */}
        <div className="relative w-11/12 h-10 mt-3">
          <input placeholder="This is where formData.question will go" className="shadow rounded-3xl w-full h-full pl-10"></input>
          <img className="absolute top-3 left-3 w-5 h-5 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
        </div>
        <section className="flex relative justify-between ml-8 w-full h-7 my-3 text-sm text-slate-500">
          <button className="before:w-full before:h-7 before:absolute before:left-0 before:top-0 before:bg-gradient-to-l before:from-1% before:to-15% before:from-white border-b-2 border-black text-black">All</button>
          <button>Images</button>
          <button>News</button>
          <button>Videos</button>
          <button>Shopping</button>
          <button>Forums</button>
        </section>
        <div div className='w-full px-3 flex justify-between items-center bg-gradient-to-b from-pink-50 h-12'>
          <div className='flex items-center'>
            <img className="w-5 h-5 mr-3" src="/ai-logo.png" alt="ai logo" />
            <p className="text-sm">AI Overview</p>
          </div>
          <div className='flex items-center'>
            <p className="font-extralight text-sm mr-2">Learn more</p>
            <img className="w-5 h-5" src="/three-dots.svg" alt="three vertical dots" />
          </div>
        </div>
        <p className="w-11/12 h-64 overflow-hidden text-lg/6 font-light">{answer}</p>
        <div className="absolute bottom-3 w-full flex flex-col items-center">
          <div className="w-full h-40 bg-gradient-to-t from-white to-white-200/25"></div>
          <div className="bg-white relative h-12 w-full flex flex-col items-center">
            <button className="bg-white border border-pink-400 font-light text-sm h-12 w-11/12 rounded-3xl">Show More</button>
            <img className="absolute top-5 right-28 mr-2 w-4 h-2 text-gray-500 opacity-60" src="/caret-down.png" alt="down caret" />
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-white"></div>
    </main>
  )
}

export default FakeFact