class PromptInterface {
    constructor() {
    }

    toString() {
        throw new Error('Not implemented. e.g. "2025/01/17 2:28PM - Success"');
    }

    get date() {
        throw new Error("Not implemented. e.g. 2025/01/17 2:28PM");
    }

    get result() {
        throw new Error('Not implemented. e.g. "Success"');
    }

    get id() {
        throw new Error("Not implemented. e.g. 1234");
    }

    get model() {
        throw new Error("Not implemented. e.g. Claude");
    }

    get version() {
        throw new Error("Not implemented: e.g. Sonnet 3.5");
    }

    get type() {
        throw new Error("Not implemented: e.g. Text-to-Text");
    }
}

export default PromptInterface;

