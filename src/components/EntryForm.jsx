import {useState} from 'react'
import {Link} from 'react-router-dom'

function EntryForm() {
  const [formData, setFormData] = useState({question: '', answer: ''})

  console.log(import.meta.env.VITE_OPENAI_API_KEY)
  // console.log(env.REACT_APP_OPENAI_API_KEY)

  function handleInput(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleClick(e) {
    e.preventDefault()
    generateFact(formData)
  }

  return (
    <section className="bg-indigo-200 h-screen">
        <h2 className="text-3xl font-bold">What are you trying to prove?</h2>
        <form className="flex flex-col">
          <label>Question
            <input className="rounded mb-2" onChange={e => handleInput(e)} type="text" name="question" value={formData.question}></input>
          </label>
          <label>Answer
            <input className="rounded" onChange={e => handleInput(e)} type="text" name="answer" value={formData.answer}></input>
          </label>
          <Link to='/result' state={{formData}}>
            <button  className="bg-yellow-400 w-fit rounded">Prove It!</button>
          </Link>
        </form>
    </section>
  )
}

export default EntryForm
