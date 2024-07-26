import {useState} from 'react'
import {Link} from 'react-router-dom'
import GoogleHeader from './GoogleHeader'

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
        <h1 className="flex mt-20 tracking-tighter">
          <span className="font-medium font-sans text-blue-600 text-4xl">P</span>
          <span className="font-medium text-red-500 text-4xl">r</span>
          <span className="font-medium text-yellow-500 text-4xl">o</span>
          <span className="font-medium text-blue-500 text-4xl">v</span>
          <div className="-rotate-13"><span className="font-medium text-green-600 text-4xl">e</span></div>
          <span className="font-medium text-red-500 text-4xl">&nbsp;</span>
          <span className="font-medium text-red-500 text-4xl">I</span>
          <span className="font-medium text-blue-500 text-4xl">t</span>
        </h1>
        <section className="flex flex-col items-center w-11/12">
          <div className="flex flex-col text-sm w-[90%] font-medium mt-4 relative">
            {
              inputPhase === "Phase 1" ?
              <input className="rounded-xl mb-2 font-light border pl-8 h-8 pr-[22%]" onChange={event => handleInput(event)} placeholder="Enter Question" type="text" name="question" value={formData.question}></input>
              :
              <input className="rounded-xl border mb-2 font-light pl-8 h-8 pr-[22%]" onChange={event => handleInput(event)} placeholder="Enter Desired Answer" type="text" name="answer" value={formData.answer}></input>
            }   
              <img className="absolute bottom-3.5 left-3 w-4 h-4 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
              <img className="absolute bottom-1 right-10 w-7 h-9" src="/google-mic.svg" alt="microphone icon" />
              <img className="absolute bottom-3.5 right-3 w-4 h-4" src="/google-lens.png" alt="camera icon" />
          </div>
          <div className="flex justify-center relative items-center">
            {
              inputPhase === "Phase 1" ?
                <button onClick={(event) => {handleClick(event)}} name="submit" className="bg-gray-100 py-1 rounded mt-2 text-xs font-regular mr-4 h-8 w-28">Submit Question</button>
              :
              <Link className="text-center mr-4 h-8 mt-2 w-28" to='/result' state={{formData}}>
                <button className="bg-gray-100 py-1 w-28 rounded text-xs font-regular h-8">Prove it!</button>
              </Link>
            }
            <Link className="text-center h-8 mt-2" to='/info' state={{formData}}>
              <button className="bg-gray-100 w-fit px-4 py-1 rounded text-xs font-regular h-8">How To</button>
            </Link>
            {
              inputPhase === "Phase 2"
              &&
              <button onClick={(event) => {handleClick(event)}} name="back" className="bg-gray-100 px-1 py-1 rounded mt-2 mr-4 absolute -left-8 top-2 h-4">
                  <img name="back" className="rotate-90 opacity-60 h-2 w-2.5 saturate-0" src="/caret-down.png" alt="down caret" />
              </button>
            }
          </div>
        </section>
      </section>
    </>
  )
}

export default EntryForm
