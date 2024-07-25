import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {getFact} from "../apiCalls"
import '@material/web/button/outlined-button.js'
import '@material/web/tabs/primary-tab.js'
import '@material/web/elevation/elevation.js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import trainingDetails from "../trainingDetails"

function FakeFact(props) {
  const [answer, setAnswer] = useState({part1: [], related: []})
  const location = useLocation()
  let formData
  formData = location ? location.state : null

  

  const generateFact = async () => {
    console.log("formData", formData.formData)
    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: trainingDetails
          },
          {
            role: "user", content: `The question is ${formData.formData.question} and the fake fact is ${formData.formData.answer}`
          }
        ]
      }

      const result = await getFact(data)
      
      if(result) {
        const fact = result.choices[0].message.content
        console.log('fact', fact)
        processFact(fact)
      }
    } catch (error) {
      console.error('Error generating fact:', error)
      setAnswer('Failed to generate fact.')
    }
  }

  function processFact(fact) {
    const splitFact = fact.split("RELATED: ")
    const answer1 = splitFact[0].split("FACT")
    const relatedQuestions = splitFact[1].split("QUESTION: ")

    setAnswer({part1: answer1, related: relatedQuestions})
  }

  // useEffect(() => {
  //   formData && generateFact()
  // }, [formData])

  return (
    <main className="w-full h-screen bg-gray-100 flex flex-col items-center">
      <div className="h-6 w-6 bg-red-600 absolute left-0 z-10" onClick={() => generateFact()}></div>
      <div className="flex flex-col items-center h-2/3 mb-2 bg-white relative">
        {/* <header>
          <img src="/lines.png" alt="three horizontal lines" />
          <img src="/beaker.png" alt="beaker" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/bell-logo.png" alt="bell logo" />
        </header> */}
        <div className="relative w-11/12 h-10 mt-3">
          
          <input placeholder={formData.formData.question} className="shadow rounded-3xl w-full h-full pl-10 overflow-hidden placeholder:text-black placeholder:text-sm placeholder:font-light"></input>
          <div className="w-full h-10 absolute left-0 top-0 bg-gradient-to-l from-25% to-35% from-white"></div>
          <img className="absolute top-3 left-3 w-5 h-5 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
          <img className="absolute top-1 right-12 w-8 h-10" src="/google-mic.svg" alt="microphone icon" />
          <img className="absolute top-3 right-3 w-5 h-5" src="/google-lens.png" alt="camera icon" />
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
        <p className="w-11/12 h-64 overflow-hidden text-lg/6 font-light">{answer.part1[0]}<span className="bg-pink-200 font-normal">{answer.part1[1]}</span>{answer.part1[2]}</p>
        <div className="absolute bottom-3 w-full flex flex-col items-center">
          <div className="w-full h-40 bg-gradient-to-t from-white to-white-200/25"></div>
          <div className="bg-white relative h-12 w-full flex flex-col items-center">
            <button className="bg-white border border-pink-400 font-light text-sm h-12 w-11/12 rounded-3xl">Show More</button>
            <img className="absolute top-5 right-28 mr-2 w-4 h-2 opacity-60" src="/caret-down.png" alt="down caret" />
          </div>
        </div>
      </div>
      <section className="h-1/3 bg-white w-full overflow-hidden flex flex-col items-center">
          <ul className="w-11/12">
            <div className="text-lg h-14 border-b bg-white flex items-center justify-between">
              <h2>People also ask</h2>
              <img className="w-4 h-4" src="/three-dots.svg" alt="three vertical dots" />
            </div>
            <div className="text-sm/4 h-14 border-b bg-white flex items-center justify-between">
              <p className="pr-3">{answer.related[1]}</p>
              <img className="w-8 h-8 py-3 px-2 bg-gray-200 opacity-60 saturate-0 rounded-full" src="/caret-down.png" alt="down caret" />
            </div>
            <div className="text-sm/4 h-14 border-b bg-white flex items-center justify-between">
              <p className="pr-3">{answer.related[2]}</p>
              <img className="w-8 h-8 py-3 px-2 bg-gray-200 opacity-60 saturate-0 rounded-full" src="/caret-down.png" alt="down caret" />
              </div>
            <div className="text-sm/4 h-14 border-b bg-white flex items-center justify-between">
              <p className="pr-3">{answer.related[3]}</p>
              <img className="w-8 h-8 py-3 px-2 bg-gray-200 opacity-60 saturate-0 rounded-full" src="/caret-down.png" alt="down caret" />
            </div>
            <div className="text-sm/4 h-14 border-b bg-white flex items-center justify-between">
              <p className="pr-3">{answer.related[4]}</p>
              <img className="w-8 h-8 py-3 px-2 bg-gray-200 opacity-60 saturate-0 rounded-full" src="/caret-down.png" alt="down caret" />
            </div>
          </ul>
      
      
      
      </section>
      {/* <div className="bg-white h-1/3 overflow-hidden w-full flex flex-col items-center">
        <div className="bg-gray-100 rounded-xl w-11/12 mt-3">
          <div className="w-full h-16 flex justify-between items-center">
              <div className="flex items-center">
                <p className="border h-6 w-7 ml-4 mr-3 rounded-full text-center">W</p>
                <div>
                  <p className="text-sm">Wikipedia</p>
                  <p className="font-light text-xs">https://en.wikipedia.org</p>
                </div>
              </div>
              <img className="w-5 h-5" src="/three-dots.svg" alt="three vertical dots" />
          </div>
          <div className=" px-5 overflow-hidden text-sm/5 font-light">{answer.part2}</div>
        </div>
      </div> */}
    </main>
  )
}

export default FakeFact