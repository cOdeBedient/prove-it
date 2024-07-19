import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {getFact} from "../apiCalls"
import '@material/web/button/outlined-button.js'
import '@material/web/tabs/primary-tab.js'
import '@material/web/elevation/elevation.js';

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
    formData ? generateFact() : setAnswer('You have not submitted and answer. Here is the default answer to use for page styling.')
  }, [])



  return (
    <main className="flex flex-col items-center">
        {/* <header>
          <img src="/lines.png" alt="three horizontal lines" />
          <img src="/beaker.png" alt="beaker" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/google-logo.png" alt="google logo" />
          <img src="/bell-logo.png" alt="bell logo" />
        </header> */}
        <input className="shadow rounded-xl w-11/12 h-10"></input>
        <section className="flex justify-evenly w-full h-7 my-3">
          <button className="border-b-2 border-black">All</button>
          <button>Images</button>
          <button>News</button>
          <button>Videos</button>
          <button>Shopping</button>
          <button>Forums</button>
        </section>
        <div div className='w-11/12 flex justify-between items-center bg-gradient-to-b from-pink-50 h-12'>
          <div className='flex'>
            <img src="/ai-logo.png" alt="ai logo" />
            <p>AI Overview</p>
          </div>
          <div className='flex'>
            <p>Learn more</p>
            <img src="/three-dots.png" alt="three vertical dots" />
          </div>
        </div>
        <p className="w-11/12">{answer}</p>

        <button className="border border-pink-400 w-11/12 h-12 rounded-3xl">Show More</button>
    </main>
  )
}

export default FakeFact