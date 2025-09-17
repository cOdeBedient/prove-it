import { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleHeader from './GoogleHeader'
import ProveItTitle from './ProveItTitle'

function EntryForm() {
  const [formData, setFormData] = useState({question: '', answer: ''})
  const [inputPhase, setInputPhase] = useState("Phase 1")


  function handleInput(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleClick(event) {
    if(event.target.name === "back") {
      setInputPhase("Phase 1")
    } else {
      setInputPhase("Phase 2")
    }
  }
  

  return (
    <>
      <section className="bg-white h-screen flex flex-col items-center w-full">
        <GoogleHeader />
        <ProveItTitle />
        <section className="flex flex-col items-center w-11/12">
          <div className="flex flex-col text-base w-[90%] font-medium mt-4 relative">
            {
              inputPhase === "Phase 1" ?
              <input
                className="rounded-xl mb-2 font-light border pl-8 h-8 pr-[22%]"
                onChange={event => handleInput(event)}
                placeholder="Enter Question"
                type="text"
                name="question"
                value={formData.question}>
              </input>
              :
              <input
                className="rounded-xl border mb-2 font-light pl-8 h-8 pr-[22%]"
                onChange={event => handleInput(event)}
                placeholder="Enter Desired Answer"
                type="text"
                name="answer"
                value={formData.answer}>
              </input>
            }   
              <img className="absolute bottom-3.5 left-3 w-4 h-4 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
              <img className="absolute bottom-1 right-10 w-7 h-9" src="/google-mic.svg" alt="microphone icon" />
              <img className="absolute bottom-3.5 right-3 w-4 h-4" src="/google-lens.png" alt="camera icon" />
          </div>
          <div className="flex justify-center relative items-center">
            {
              inputPhase === "Phase 1" ?
              <button onClick={(event) => {handleClick(event)}} name="submit" className="bg-gray-100 py-1 rounded mt-2 text-xs font-regular mr-4 h-8 w-28">Confirm Question</button>
              :
              <Link to='/result' state={{formData}}>
                <button className="bg-gray-100 py-1 rounded mt-2 text-xs font-regular mr-4 h-8 w-28">Prove it!</button>
              </Link>
            }
            <Link className="text-center mt-2 w-fit" to='/info' state={{formData}}>
              <button className="bg-gray-100 py-1 px-4 rounded text-xs font-regular h-8">How To</button>
            </Link>
            {
              inputPhase === "Phase 2"
              &&
              <button onClick={(event) => {handleClick(event)}} name="back" className="bg-gray-100 px-1 py-1 rounded mt-2 mr-4 absolute -left-8 top-2 h-4">
                <img name="back" className="rotate-90 opacity-60 h-2 w-2.5 saturate-0" src="/caret-down.png" alt="back button" />
              </button>
            }
          </div>
        </section>
      </section>
    </>
  )
}

export default EntryForm
