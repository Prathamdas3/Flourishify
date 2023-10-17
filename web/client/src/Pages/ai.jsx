import React, { useState, useEffect } from 'react';

const ai = () => {
  const [prompt, setPrompt] = useState();
  const [response, setResponse] = useState();
  const getData = async () => {
    const headers = {
      'content-type': 'application/json',
    };
    const body = JSON.stringify(prompt);
    const URL = 'https://flourishify--prathamdas3.repl.co/ai/';
    try {
      const result = await fetch(URL, {
        method: 'POST',
        mode: 'no-cors',
        headers,
        prompt: body,
      });
      // const jsonData = await result.json();
      console.log(result);
      // setResponse(jsonData.response);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
  useEffect(() => {
    const getResult = async () => {
      const URL = 'https://flourishify--prathamdas3.repl.co/ai/';
      const headers = {
        'content-type': 'application/json',
      };
      try {
        const data = await fetch(URL, {
          method: 'GET',
          mode: 'no-cors',
          headers,
        });
        const jsonData = await data.json();
        console.log(jsonData);
        setResponse(jsonData.response);
      } catch (error) {
        console.error(error);
      }
    };
    getResult();
  }, []);
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
