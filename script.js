// Include packages needed for this application
require('dotenv').config();
const inquirer = require('inquirer');
// requiring the OpenAI dependency from langchain
// const { OpenAI } = require('langchain/llms/openai'); // deprecated!
// instaed to use next, run: npm install @langchain/openai
const { OpenAI } = require('@langchain/openai');
// The promptTemplate object takes in a combination of user input
// along with a fixed template string thereby allowing developers to set
// hard-coded parameters but at the same time accept dynamic user input.
// Importing from "langchain/prompts" is deprecated
// Instead, please import from "@langchain/core/prompts"
const { PromptTemplate } = require("@langchain/core/prompts");

// OpenAI has its own library, so it's important to point out that this
// version of OpenAI comes directly from langchain. There's no
// need to install any additional packages or libraries.
const model = new OpenAI({ // Initialize OpenAI model
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

// Function to invoke OpenAI with formatted prompt
const promptFunc = async (input) => {

  try {
    // const res = await model.invoke({ // original when using call promptFunc()
    //   content: "How do you capitalize all characters of a string in JavaScript?"
    // });

    // const res = await model.invoke(input); // second test using inquirer input
    // console.log(res);

    // Instantiation of a new object called "prompt" using the "PromptTemplate" class
    const prompt = new PromptTemplate({
      template: "You are a JavaScript expert and will answer the user’s coding questions as thoroughly as possible.\n{question}",
      inputVariables: ["question"],
    });

    // Format the prompt with user input
    const promptInput = await prompt.format({
      question: input
    });

    // Invoke the model with the formatted prompt
    const res = await model.invoke(promptInput);
    console.log(res);
  }
  catch (err) {
    console.error(err);
  }
};
// promptFunc(); // Calling the Model

// function to prompt user using inquirer package
const init = () => { // User Input with Inquirer
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Ask a coding question:',
    },
  ]).then((inquirerResponse) => {
    // console.log(inquirerResponse.name) // test promted input
    promptFunc(inquirerResponse.name)
  });
};

init(); // Start the application