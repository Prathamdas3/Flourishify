import { useState } from 'react';

const aiResponse = async (prompt) => {
  const [response, setResponse] = useState();
  const headers = {
    'content-type': 'application/json',
  };
  const body = JSON.stringify(prompt);
  const URL = 'http://localhost:3000/ai/';
  try {
    const result = await fetch(URL, {
      method: 'POST',
      headers,
      prompt: body,
    });
    const jsonData = await result.json();

    setResponse(jsonData.response);
    console.log(response);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

  return response;
};

export default aiResponse;
