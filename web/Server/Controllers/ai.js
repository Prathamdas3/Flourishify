import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: `${process.env.OPENAI_API_KEY}`,
});

const aiResult = async (req, res) => {
  const prompt = req.body;
  try {
    const completion = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `Suppose you are a therapist, now provide emotional support for the following issue - ${prompt}`,
      max_tokens: 1500,
      temperature: 0.4,
    });

    res.status(200).json({ response: completion.choices[0].text });
  } catch (error) {
    console.error(error);
    throw new Error({
      message: 'Could not generate a response',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }
};

export default aiResult;
