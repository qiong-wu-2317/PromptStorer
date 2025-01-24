import PromptInterface from "./PromptInterface"

class TextPrompt extends PromptInterface{
    _id = 0
    _input = ""
    _output = ""
    _model = ""
    _version = ""
    _result = ""
    _type = ""
    _date = null

    constructor({
        id = 1234,
        input = "Please translate Eng-to-French: 'Hello, world!'",
        output = "Bonjour, le monde!",
        model = "Claude",
        version = "Sonnet 3.5",
        result = "Success",
        type = "Text-to-Text"
    } = {}) {
        super()
        this._id = id
        this._input = input
        this._output = output
        this._model = model
        this._result = result
        this._type = type
        this._version = version
        this._date = new Date()
      }

    toString(){
        return `⭐️ Prompt ${this.id} (${this.date}) ${this.model} ${this.version} - ${this.result}
    Input: ${this.input}
    Output: ${this.output}`
    }

    get date() {
        return this._date
    }

    get result() {
        return this._result
    }

    get id() {
        return this._id
    }

    get model() {
        return this._model
    }

    get version() {
        return this._version
    }

    get type() {
        return this._type
    }

    get input() {
        return this._input
    }

    get output() {
        return this._output
    }
      
}

export default TextPrompt;