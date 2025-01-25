import Attachment from "./Attachment.js";
import PromptInterface from "./PromptInterface.js";

class MultiModelPrompt extends PromptInterface {
  attachements = {inputAttachment: null, outputAttachment: null};

  constructor({
    id = 1234,
    input = "Please translate Eng-to-French: 'Hello, world!'",
    output = "Bonjour, le monde!",
    model = "Claude",
    version = "Sonnet 3.5",
    result = "Success",
    inputAttachment = new Attachment(), 
    outputAttachment = new Attachment()} = {}){

    super({id,
      input,
      output,
      model,
      version,
      result});
    // const _inputAttachment = new Attachment(inputAttachment);
    // console.log(inputAttachment)
    this.attachements.inputAttachment = inputAttachment;
    // const _outputAttachment = new Attachment(outputAttachment);
    this.attachements.outputAttachment = outputAttachment;
  }

  toString() {
    return `${super.toString()}
    input attachement: ${this.attachements.inputAttachment.toString()}
    output attachement: ${this.attachements.outputAttachment.toString()}
    `;
  }
}

export default MultiModelPrompt;