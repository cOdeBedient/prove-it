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
        <input className="shadow rounded-2xl w-11/12 h-10 mt-3"></input>
        <section className="flex justify-evenly w-full h-7 my-3">
          <button className="border-b-2 border-black">All</button>
          <button>Images</button>
          <button>News</button>
          <button>Videos</button>
          <button>Shopping</button>
          <button>Forums</button>
        </section>
        <div div className='w-full px-3 flex justify-between items-center bg-gradient-to-b from-pink-50 h-12'>
          <div className='flex'>
            <img src="/ai-logo.png" alt="ai logo" />
            <p>AI Overview</p>
          </div>
          <div className='flex'>
            <p>Learn more</p>
            <img src="/three-dots.png" alt="three vertical dots" />
          </div>
        </div>
        <p className="w-11/12 overflow-hidden font-light">{answer}</p>
        <div className="absolute bottom-4 w-full flex flex-col items-center">
          <div className="w-full h-40 bg-gradient-to-t from-white to-white-200/25"></div>
          <div className="bg-white h-12 w-full flex flex-col items-center">
            <button className="bg-white border border-pink-400  h-12 w-11/12 rounded-3xl">Show More</button>
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-white"></div>
    </main>
  )
}

export default FakeFact