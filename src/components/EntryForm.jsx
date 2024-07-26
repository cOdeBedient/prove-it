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
      <section className="bg-white h-screen flex flex-col items-center">
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
            <Link className="text-center" to='/result' state={{formData}}>
              <button className="bg-gray-100 w-fit px-4 py-1 rounded mt-2 text-xs font-regular">Prove It!</button>
            </Link>
          </form>
      </section>
    </>
  )
}

export default EntryForm
