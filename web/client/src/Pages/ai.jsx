import React, { useState } from 'react';

const ai = () => {
  const [prompt, setPrompt] = useState();
  const [response, setResponse] = useState();
  const getData = async () => {
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
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  return (
    <>
      <textarea
        className="textarea textarea-bordered w-96"
        placeholder="write your text here"
        rows={10}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit" onClick={getData}>
        Help me
      </button>
      <div>{response}</div>
    </>
  );
};

export default ai;
