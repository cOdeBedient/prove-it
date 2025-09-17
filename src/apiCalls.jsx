// src/apiCalls.jsx
const getFact = async (data) => { 
    try {
      const response = await fetch('/api/generate-fact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Network response was not ok');
      }

      const result = await response.json();
      return result;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error;
    }     
}

export { getFact }
