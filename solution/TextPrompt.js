import PromptInterface from "./PromptInterface.js";

class TextPrompt extends PromptInterface{
  _type;

  constructor({
    id = 1234,
    input = "Please translate Eng-to-French: 'Hello, world!'",
    output = "Bonjour, le monde!",
    model = "Claude",
    version = "Sonnet 3.5",
    result = "Success",
    type = "Text-to-Text"
  } = {}) {
    super({id,input, output, model, version, result});
    this._type = type;
  }

  toString(){
    return `${super.toString()}
    type: ${this._type}
    `;
  }

  get type() {
    return this._type;
  }
      
}

export default TextPrompt;