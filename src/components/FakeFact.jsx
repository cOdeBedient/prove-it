import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {getFact} from "../apiCalls"
import OpenAI from "openai"
import dotenv from "dotenv"

// require("dotenv").config()

// const openAIClient = new OpenAI({
//   apiKey: process.env['OPEN_AI_KEY']
// })

// const chatCompletion = await OpenAIClient.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       role: "system",
//       content: "you are a search engine"
//     }
//   ]
// })

function FakeFact(props) {
  
  const [answer, setAnswer] = useState("Here's the answer!")
  const location = useLocation()
  const { formData } = location.state

  const generateFact = async () => {
    try {
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "you are a search engine that returns a two-sentence answer to a question using the fake fact provided by the user instead of the real fact"
          },
          {
            role: "user", content: `The question is ${formData.question} and the fact is ${formData.answer}`
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
    generateFact()
  }, [])


  return (
    <>
        <h2 className="text-3xl font-bold underline">Fake Fact</h2>
        <p>{answer}</p>
    </>
  )
}

export default FakeFact