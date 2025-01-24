import TextPrompt from "./TextPrompt.js"
import Attachment from "./Attachment.js"

class MultiModalPrompt extends TextPrompt {
    attachements = {inputAttachment: null, outputAttachment: null}

    constructor({
        id = 1234,
        input = "Please translate Eng-to-French: 'Hello, world!'",
        output = "Bonjour, le monde!",
        model = "Claude",
        version = "Sonnet 3.5",
        result = "Success",
        type = "Text-to-Text",
        inputAttachment = new Attachment(), 
        outputAttachment = new Attachment()} = {}){

            super({id,
                input,
                output,
                model,
                version,
                result,
                type})
            const _inputAttachment = new Attachment(inputAttachment)
            this.attachements.inputAttachment = _inputAttachment
            const _outputAttachment = new Attachment(outputAttachment)
            this.attachements.outputAttachment = _outputAttachment
    }
}

export default MultiModalPrompt;