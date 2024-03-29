# CodingTutorAI

<br/>
<p align="center">
    <a href="https://www.openai.com/" >
        <img alt="OpenAI's GPT-3 (for AI-powered features) - An autoregressive language model that uses deep learning to produce human-like text" src="https://img.shields.io/static/v1.svg?label=OpenAI&message=GPT-3-turbo&color=brightgreen" /></a>
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
    <a href="https://www.npmjs.com/package/inquirer/v/8.2.4" >
        <img alt="Inquirer - A collection of common interactive command line user interfaces." src="https://img.shields.io/static/v1.svg?label=npm&message=inquirer&color=blue" /></a>
    <a href="https://www.npmjs.com/" >
        <img alt="Node Package Manager" src="https://img.shields.io/static/v1.svg?label=npm&message=packages&color=lightblue" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>

Streamline your JavaScript learning with CodingTutorAI, a Node.js command-line application that serves as your personal JavaScript consultant. Ask any question related to JavaScript concepts, and get precise, insightful answers to enhance your coding skills.

## Features

-   Get answers to JavaScript-related questions instantly.
-   Interactive CLI for easy use and quick learning.
-   Coverage of a wide range of JavaScript concepts from basics to advanced topics.

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/naturuplift/CodingTutorAI.git
```

2. Navigate to the project directory:
```bash
cd CodingTutorAI
```

3. Install the required dependencies:
```bash
npm install
```

## OpenAI API Key

To use CodingTutorAI, you need an OpenAI API key. Sign up at OpenAI, verify your email, and set up billing with usage limits for safety. Generate an API key under "API Keys" in your OpenAI account. This key is crucial for making API calls from the application. Ensure you store this key securely, as it cannot be retrieved once lost. For detailed steps on obtaining and managing your OpenAI API key, refer to the OpenAI documentation and support forums.

To utilize the AI-powered features of CodingTutorAI, create an .env file in the root directory. Inside this file, store your API key with the variable name OPENAI_API_KEY (e.g., OPENAI_API_KEY=your_api_key_here). This setup ensures secure and private access to the necessary AI services, keeping your API key hidden from public view.

## Usage

Launch the application with:
```bash
node app.js
```
and start asking your JavaScript questions.

## Screenshots

Below are sample screenshots showcasing the application functionality as functionality is implemented.

JavaScript Question:

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/fd32e717-fc43-40d8-9e85-1b5593cee227)

Answer without Prompt Template:

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/f9ac2556-79e1-4984-8d90-135cde4bf889)

JavaScript Question:

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/37549180-dd37-4cfb-867c-a310c99f5d15)

Answer with Prompt Template imported 'const { PromptTemplate } = require("@langchain/core/prompts")':

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/2d0f8c5b-c367-4b74-9f1a-a1e22fee3849)

JavaScript Question:

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/37549180-dd37-4cfb-867c-a310c99f5d15)

Answer with StructuredOutputParser imported 'const { StructuredOutputParser } = require("langchain/output_parsers")':

![image](https://github.com/naturuplift/CodingTutorAI/assets/23546356/50108b20-bb13-4c0f-b623-d4647996fdb8)

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues with suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[MIT]: <https://github.com/naturuplift/CodingTutorAI/blob/main/LICENSE>
