import { AzureOpenAI } from 'openai'
import 'dotenv/config'
const apiKey = process.env['AZURE_OPENAI_API_KEY']
const apiVersion = process.env['AZURE_OPENAI_API_VERSION']
const endpoint = process.env['AZURE_OPENAI_ENDPOINT']
console.log('🚀 ~ endpoint:', endpoint)
export const azureOpenAIClient = new AzureOpenAI({
  apiKey,
  apiVersion,
  baseURL: endpoint,
})
