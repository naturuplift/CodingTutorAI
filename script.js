
require('dotenv').config();
// requiring the OpenAI dependency from langchain
// const { OpenAI } = require('langchain/llms/openai'); // deprecated!
const { OpenAI } = require('@langchain/openai');

const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-3.5-turbo'
  });
  
  // console.log({ model });
  