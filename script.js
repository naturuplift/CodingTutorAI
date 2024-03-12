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
//  One of LangChain's output parsers is the StructuredOutputParser class
// and will be the one we use in the application. There are two main
// components to LangChain output parsers:
// formatting instructions and the parsing method
//  The formatting instructions play a pivotal role, allowing us to
// construct the exact JSON that will be returned as the response
// Additionally, we can use prompts to define the values of the data that
// is being returned dynamically using OpenAI. For instance, not only can
// we pass back the response, we can also ask OpenAI to provide additional
// information such as a source, the date the source was last updated, or
// even the response in another language! It's worth mentioning that the
// additional information is not static. You can think of it as asking
// follow-up questions based on the response and passed back to the user
// as a more completed dataset. 
const { StructuredOutputParser } = require("langchain/output_parsers");

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

// Define response schema for the output
const responseSchema = StructuredOutputParser.fromNamesAndDescriptions({
  code: "Javascript code that answers the user's question",
  explanation: "detailed explanation of the example code provided",
});

// new variable that will hold the value of the getFormatInstructions() method
const formatInstructions = responseSchema.getFormatInstructions();

// Function to invoke OpenAI with formatted prompt
const promptFunc = async (input) => {

  try {

    // Instantiation of a new object called "prompt" using the "PromptTemplate" class
    const prompt = new PromptTemplate({
      template: "You are a javascript expert and will answer the user’s coding questions thoroughly as possible.\n{format_instructions}\n{question}",
      inputVariables: ["question"],
      partialVariables: { format_instructions: formatInstructions }
    });

    // Format the prompt with user input
    const promptInput = await prompt.format({
      question: input
    });

    // Invoke the model with the formatted prompt
    const res = await model.invoke(promptInput);

    // Parse the structured output
    console.log(await responseSchema.parse(res));

  }
  catch (parseError) {
    console.error("Failed to parse structured output:", parseError);
  }
};

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