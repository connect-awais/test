import express from "express";
import cors from "cors";
import Groq from "groq-sdk";
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages,
    });
    res.json(completion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () =>
  console.log("Local API running at http://localhost:5000")
);
