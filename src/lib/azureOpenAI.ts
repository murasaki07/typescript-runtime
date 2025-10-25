import { OpenAI } from 'openai'
import 'dotenv/config'
const apiKey = process.env['AZURE_OPENAI_API_KEY']
const apiVersion =
  process.env['AZURE_OPENAI_API_VERSION'] || '2025-03-01-preview'
const endpoint = process.env['AZURE_OPENAI_ENDPOINT']
console.log('🚀 ~ endpoint:', endpoint)
console.log('🚀 ~ apiVersion:', apiVersion)
export const azureOpenAIClient = new OpenAI({
  apiKey,
  baseURL: `${endpoint}/openai`,
  defaultQuery: { 'api-version': apiVersion },
  defaultHeaders: { 'api-key': apiKey },
})
