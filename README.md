# PromptStorer
Assignment1 Qiong Wu

## Setting up

Please clone the repository and run

```bash
cd PromptStorer
npm install
```

To run the basic example please run

```bash
npm start
```

To run the set of tests run

```bash
npm test
```

## Project description:

### PromptInterface
The PromptInterface serves as the foundational class for all prompts, defining attributes and methods. Each prompt includes the following default attributes:

_id: A unique identifier (default: 1234).
_input: The input content of the prompt (default: "Please translate Eng-to-French: 'Hello, world!'").
_output: The generated output of the prompt (default: "Bonjour, le monde!").
_model: The name of the model used (default: "Claude").
_version: The version of the model (default: "Sonnet 3.5").
_result: The result or status of the prompt (default: "Success").
_date: The timestamp of the prompt (default: the current date).

### TextPrompt
TextPrompt extends the PromptInterface by introducing the _type property, which specifies the type of the prompt (default: "Text-to-Text").

### MultiModalPrompt
MultiModalPrompt further enhances the TextPrompt by introducing support for attachments:

inputAttachment: Represents the input attachment.
outputAttachment: Represents the output attachment.

### PromptManager
The PromptManager is the core utility class of the system, offering functionality to manage prompts effectively.

addPrompt(prompt) - Adding prompts.
deletePromptById(id) - Deleting prompts by their ID .
listId() - Listing prompt IDs .



