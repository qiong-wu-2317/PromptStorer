const promptsSymbol = Symbol("prompts");

class PromptManager{
  constructor() {
    this[promptsSymbol] = []; 
  }

  addPrompt(prompt){
    this[promptsSymbol].push(prompt);
  }

  deletePromptById(id) {
    const initialLength = this[promptsSymbol].length;

    this[promptsSymbol] = this[promptsSymbol].filter((prompt) => prompt.id !== id);

    return this[promptsSymbol].length < initialLength;
  }

  listAll() {
    return this[promptsSymbol]
      // .filter((prompt) => prompt.valid) // Filter only valid prompts
      .map((prompt) => prompt.toString()) // Convert each valid prompt to a string
      .join("\n");
  } 

  [Symbol.iterator]() {
    let index = 0;
    const prompts = this.prompts;

    return {
      next() {
        if (index < prompts.length) {
          return { value: prompts[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  get prompts(){
    return [...this[promptsSymbol]];
  }

  filter(text) {
    const filteredPrompts = this[promptsSymbol].filter(
      (prompt) =>
        prompt.match(text)
    );

    // Return a new instance of PromptManager containing the filtered prompts
    const filteredManager = new PromptManager();
    filteredPrompts.forEach((prompt) => filteredManager.addPrompt(prompt));
    return filteredManager;
  }
}

export default PromptManager;