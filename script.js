// Include packages needed for this application
require('dotenv').config();
const inquirer = require('inquirer');

// requiring the OpenAI dependency from langchain
// const { OpenAI } = require('langchain/llms/openai'); // deprecated!
const { OpenAI } = require('@langchain/openai');

// OpenAI has its own library, so it's important to point out that this
// version of OpenAI comes directly from langchain. There's no
// need to install any additional packages or libraries.
const model = new OpenAI({
  // The openAIApiKey property is used to pass in our OpenAI API key
  // to check if a project is authorized to use the API and for collecting usage
  // information.
  openAIApiKey: process.env.OPENAI_API_KEY,
  // The temperature property represents variability in the words selected in a response.
  // Temperature ranges from 0 to 1 with 0 meaning higher precision but less creativity
  //  and 1 meaning lower precision but more variation and creativity.
  temperature: 0,
  // the model property represents which language model will be used.
  // For this project, we will use the gpt-3.5-turbo model because
  // it’s optimized for chat and the best available option.
  model: 'gpt-3.5-turbo'
});
// console.log({ model }); // confirm connection to OpenAI
  
const promptFunc = async () => {
  try {
    const res = await model.invoke({
      content: "How do you capitalize all characters of a string in JavaScript?"
    });
    console.log(res);
  }
  catch (err) {
    console.error(err);
  }
};

// promptFunc();





