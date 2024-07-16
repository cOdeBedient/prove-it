import React from 'react'
import { useLocation } from 'react-router-dom'

function FakeFact(props) {
    const location = useLocation()
    const { formData } = location.state

  return (
    <>
        <h2 className="text-3xl font-bold underline">Fake Fact</h2>
    </>
  )
}

export default FakeFact