const promptsSymbol = Symbol("prompts");

class PromptManager{
    constructor() {
        this[promptsSymbol] = []; 
    }

    addPrompt(prompt){
        // if (prompt.inputAttachment instanceof Attachment && prompt.outputAttachment instanceof Attachment){
        //     const multiModalPrompt = new MultiModalPrompt(prompt)
        //     this.prompts.push(multiModalPrompt)
        // } else {
        //     const textPrompt = new TextPrompt(prompt)
        //     this.prompts.push(textPrompt)
        // }
        this[promptsSymbol].push(prompt)
    }

    deletePromptById(id) {
        const initialLength = this[promptsSymbol].length;

        this[promptsSymbol] = this[promptsSymbol].filter((prompt) => prompt.id !== id);

        return this[promptsSymbol].length < initialLength;
    }

    listId() {
        return this[promptsSymbol].map((prompt) => prompt.id);
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




}

export default PromptManager;