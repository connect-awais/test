import Groq from "groq-sdk";
import process from 'process';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages,
    });

    res.status(200).json(completion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
