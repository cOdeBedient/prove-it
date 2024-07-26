const getFact = async (data) => { 
  console.log("data", data)

    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions'
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      return result

    } catch (error) {
        // console.error('Error calling OpenAI:', error)
        return error;
    }     
}

export { getFact }
