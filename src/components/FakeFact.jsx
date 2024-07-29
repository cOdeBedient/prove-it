import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {getFact} from "../apiCalls"
import trainingDetails from "../trainingDetails"
import {Link} from 'react-router-dom'
import './Styles.css'

function FakeFact(props) {
  const [answer, setAnswer] = useState({part1: [], related: []})
  const [generatingAnswer, setGeneratingAnswer] = useState(true)

  const location = useLocation()
  let formData
  formData = location ? location.state : null

  const generateFact = async () => {
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
        processFact(fact)
      }
    } catch (error) {
      setGeneratingAnswer(false)
      setAnswer({part1: ["Failed to generate fact. Please try again later and make sure you don't show your friend this screen!", "", ""], part2: []})
    }
  }

  function processFact(fact) {
    const splitFact = fact.split("RELATED: ")
    const answer1 = splitFact[0].split("FACT")
    const relatedQuestions = splitFact[1].split("QUESTION: ")
    setGeneratingAnswer(false)
    setAnswer({part1: answer1, related: relatedQuestions})
  }

  useEffect(() => {
    formData && generateFact()
  }, [formData])

  return (
    <Link to='/error'>
      <main className="w-full bg-gray-100 flex flex-col items-center">
        <div className="flex flex-col items-center h-[480px] mb-2 w-full bg-white relative">
          <div className="relative w-11/12 h-10 mt-3">
            <input placeholder={formData.formData.question} className="shadow rounded-3xl w-full h-full pl-10 overflow-hidden placeholder:text-black placeholder:text-sm placeholder:font-light"></input>
            <div className="w-full rounded-3xl h-10 absolute left-0 top-0 bg-gradient-to-l from-25% to-35% from-white"></div>
            <img className="absolute top-3 left-3 w-5 h-5 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
            <img className="absolute top-1 right-12 w-8 h-10" src="/google-mic.svg" alt="microphone icon" />
            <img className="absolute top-3 right-3 w-5 h-5" src="/google-lens.png" alt="camera icon" />
          </div>
          <section className="flex relative justify-between ml-8 w-full h-7 my-3 pr-4 text-sm text-slate-500">
            <button className="before:w-full before:h-7 before:absolute before:left-0 before:top-0 before:bg-gradient-to-l before:from-[7%] before:to-20% before:from-white border-b-2 border-black text-black">All</button>
            <button>Images</button>
            <button>News</button>
            <button>Videos</button>
            <button>Shopping</button>
            <button>Forums</button>
          </section>
          <div div className='w-full px-3 flex justify-between items-center bg-gradient-to-b from-pink-50 h-12 relative'>
          {generatingAnswer && <div className='absolute top-0 left-0 pulse-gradient h-12 w-full z-1'></div>}
            <div className='flex items-center z-10'>
              <img className="w-5 h-5 mr-3" src="/ai-logo.png" alt="ai logo" />
              <p className="text-sm">AI Overview</p>
            </div>
            <div className='flex items-center z-10'>
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
        {answer.related &&
          <section className="bg-white w-full overflow-hidden flex flex-col items-center">
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
      }
      </main>
    </Link>
  )
}

export default FakeFact