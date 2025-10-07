import { GoogleGenAI } from '@google/genai'

export const geminiAPIClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})
