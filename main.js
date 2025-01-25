/* eslint-disable quotes */
import PromptManager from "./solution/PromptManager.js";
import TextPrompt from "./solution/TextPrompt.js";
import MultiModelPrompt from "./solution/MultiModelPrompt.js";
import Attachment from "./solution/Attachment.js";

import readline from 'readline';


const myPromptManager = new PromptManager();

let idCounter = 0;
// Add a prompt
myPromptManager.addPrompt(
  new TextPrompt({
    id: ++idCounter,
    input: "Write a PromptManager",
    output: "As a large language model, I can write a PromptManager class.",
  })
);

myPromptManager.addPrompt(
  new TextPrompt({
    id: ++idCounter,
    input: "Is it working?",
    output: "As a large language model, I can write a PromptManager class.",
  })
);

myPromptManager.addPrompt(
  new MultiModelPrompt({
    id: ++idCounter,
    input: "Convert this pdf to a png file",
    output: "As a large language model, I can write a MultiModalPrompt class.",
    inputAttachment: new Attachment({
      type: "input",
      payload: "./inputFile.pdf",
    }),
    outputAttachment: new Attachment({
      type: "output",
      payload: "./outFile.png",
    }),
  })
);



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: ' // Set a prompt text
});

// Start the conversation
const startLine = `
╔════════════════════════════════════════════════════╗
║                    Prompt Manager                  ║
╠════════════════════════════════════════════════════╣
║ What can I do for you?                             ║
║                                                    ║
║   1 - List all prompts                             ║
║   2 - Add a new prompt                             ║
║   3 - Delete a prompt by ID                        ║
║   4 - Filter prompts by model                      ║
║   exit - Exit the program                          ║
║                                                    ║
╚════════════════════════════════════════════════════╝
`;
console.log(startLine);

rl.prompt(); // Show the prompt

// Handle input from the user
rl.on('line', async (input) => {
  // Process the input
  await handleConversation(input.trim());

  console.log(startLine);
  
  // End the conversation if the user says 'exit'
  if (input.trim().toLowerCase() === 'exit') {
    rl.close(); // Close the interface
  } else {
    rl.prompt(); // Continue the conversation
  }
});

// Handle when the user exits
rl.on('close', () => {
  console.log('Sys: Goodbye!');
  process.exit(0); // Exit the program
});

// A simple function to handle responses
async function handleConversation(input) {
  switch (input) {
    case '1': // List all prompts
      console.log(myPromptManager.listAll());
      break;

    case '2': // Add a new prompt
      await handleInsert();
      console.log('Updated total prompts:', myPromptManager.prompts.length);
      break; // Avoid returning a premature success message

    case '3': // Delete a prompt by ID
      await handelDelete();
      break;

    case '4': // Filter prompts by model
      await handleFilter();
      break;

    case 'exit': // Exit the program
      rl.close();
      return 'Exiting the program...';

    default:
      return 'Invalid input. Please select a valid option.';
  }
}

function handleInsert() {
  return new Promise((resolve) => {
    console.log("Adding new prompt...");
    rl.question('Enter the Prompt model: ', (model) => {
      rl.question('Enter the Prompt version: ', (version) => {
        rl.question('Enter the Prompt result: ', (result) => {
          rl.question('Enter the Prompt Input: ', (input) => {
            rl.question('Enter the Prompt Output: ', (output) => {
              rl.question('Enter 1 for Text Prompt, 2 for Multi Model Prompt: ', (answer) => {
                if (answer === '2') {
                  rl.question('Enter input & output attachment (like inType-inPayload,outType-outPayload): ', (res) => {
                    let attach = {};
                    try {
                      const [first, second] = res.split(',');
                      attach.inType = first.split('-')[0];
                      attach.inPayload = first.split('-')[1];
                      attach.outType = second.split('-')[0];
                      attach.outPayload = second.split('-')[1];
                    } catch (err) {
                      console.log('Invalid input, generating random attachment...');
                      const randomIn = Math.floor(Math.random() * 99) + 1;
                      const randomOut = Math.floor(Math.random() * 99) + 1;
                      attach.inType = `type${randomIn}`;
                      attach.inPayload = `payload${randomIn}`;
                      attach.outType = `type${randomOut}`;
                      attach.outPayload = `payload${randomOut}`;
                    }
                    const inputAttachment = new Attachment({type:attach.inType, payload:attach.inPayload});
                    const outputAttachment = new Attachment({type:attach.outType, payload:attach.outPayload});
                    const prompt = new MultiModelPrompt({
                      id: ++idCounter,
                      input,
                      output,
                      model,
                      version,
                      result,
                      inputAttachment,
                      outputAttachment                      
                    });

                    myPromptManager.addPrompt(prompt);
                    console.log('Prompt added successfully!');
                    resolve();
                  });
                } else if (answer === '1') {
                  rl.question('Enter the Prompt type: ', (type) => {
                    const prompt = new TextPrompt({
                      id: ++idCounter,
                      input,
                      output,
                      model,
                      version,
                      result,
                      type,
                    });
                    myPromptManager.addPrompt(prompt);
                    console.log('Prompt added successfully!');
                    resolve();
                  });
                } else {
                  console.log('Invalid option. Returning to the main menu.');
                  resolve();
                }
              });
            });
          });
        });
      });
    });
  });

}

function handelDelete(){
  return new Promise((resolve) => {
    rl.question('Enter the ID of the prompt to delete:', (id) => {
      const deleted = myPromptManager.deletePromptById(Number(id));
      console.log(deleted ? 'Prompt deleted successfully!' : 'Prompt not found.');
      resolve();
    });
  });
}

function handleFilter(){
  return new Promise((resolve) => {
    rl.question('Enter the text to filter the prompts by model:', (text) => {
      const filteredPrompts = myPromptManager.filter(text); // Assuming filter is implemented in PromptManager
      console.log('Filtered Prompts:');
      console.log(filteredPrompts.listAll()); // Assuming listAll returns a formatted string
      console.log('Total prompts found:', filteredPrompts.prompts.length);
      resolve();
    });
  });
}






