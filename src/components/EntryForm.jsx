import {useState} from 'react'
import {Link} from 'react-router-dom'

function EntryForm() {
  const [formData, setFormData] = useState({question: '', answer: ''})

  function handleInput(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <>
      {/* <header className="h-8 text-xl  italic ml-2">prove it</header> */}
      <section className="bg-white h-screen flex flex-col items-center w-full">
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
          {/* <h2 className="text-2xl font-bold text-center my-4 ">What are you trying to prove?</h2> */}
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
          <form className="flex flex-col items-center w-11/12">
            <label className="flex flex-col text-sm w-[90%] font-medium mt-4 relative">Question:
                <input rows="3" className="rounded-xl mb-2 font-light border pl-8 h-8" onChange={e => handleInput(e)} type="text" name="question" value={formData.question}></input>
                <img className="absolute bottom-3.5 left-3 w-4 h-4 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
                <img className="absolute bottom-1 right-10 w-7 h-9" src="/google-mic.svg" alt="microphone icon" />
                <img className="absolute bottom-3.5 right-3 w-4 h-4" src="/google-lens.png" alt="camera icon" />
            </label>
            <label className="flex flex-col text-sm w-[90%] font-medium relative">Answer:
              <input rows="2" className="rounded-xl border mb-2 font-light pl-8 h-8" onChange={e => handleInput(e)} type="text" name="answer" value={formData.answer}></input>
              <img className="absolute bottom-3.5 left-3 w-4 h-4 text-gray-500 opacity-60" src="/magnifying-glass.svg" alt="search icon" />
              <img className="absolute bottom-1 right-10 w-7 h-9" src="/google-mic.svg" alt="microphone icon" />
              <img className="absolute bottom-3.5 right-3 w-4 h-4" src="/google-lens.png" alt="camera icon" />
            </label>
            <div className="flex">
              <Link className="text-center mr-4" to='/result' state={{formData}}>
                <button className="bg-gray-100 w-fit px-4 py-1 rounded mt-2 text-xs font-regular">Prove It!</button>
              </Link>
              <Link className="text-center" to='/info' state={{formData}}>
                <button className="bg-gray-100 w-fit px-4 py-1 rounded mt-2 text-xs font-regular">How To</button>
              </Link>
            </div>
          </form>
      </section>
    </>
  )
}

export default EntryForm
