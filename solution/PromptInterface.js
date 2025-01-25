export default class PromptInterface {
  _id;
  _input;
  _output;
  _model = "";
  _version;
  _result;
  #valid

  constructor({id, input, output, model, version, result}) {
    this._id = id;
    this._input = input;
    this._output = output;
    this._model = model;
    this._result = result;
    this._version = version;
    this._date = new Date();
    this.#valid = 1;
  }

  toString() {
    if (!this._id) {
      throw new Error("Not implemented. e.g. \"2025/01/17 2:28PM - Success\"");
    }
    return `⭐️ Prompt ${this.id} (${this.date.toLocaleString()}) ${this.model} ${this.version} - ${this.result}
    Input: ${this._input}
    Output: ${this._output}`;
  }

  get date() {
    if (!this._id) {
      throw new Error("Not implemented. e.g. 2025/01/17 2:28PM");
    }
    return this._date;
  }

  get result() {
    if (!this._id) {
      throw new Error("Not implemented. e.g. \"Success\"");
    }
    return this._result;
  }

  get id() {
    if (!this._id) {
      throw new Error("Not implemented. e.g. 1234");
    }
    return this._id;
  }

  get model() {
    if (!this._id) {
      throw new Error("Not implemented. e.g. Claude");
    }
    return this._model;
  }

  get version() {
    if (!this._id) {
      throw new Error("Not implemented: e.g. Sonnet 3.5");
    }
    return this._version;
  }

  get input() {
    if (!this._id) {
      throw new Error("Not implemented");
    }
    return this._input;
  }

  get output() {
    if (!this._id) {
      throw new Error("Not implemented");
    }
    return this._output;
  }

  match(text){
    return this._model && this._model.toLowerCase().indexOf(text.toLowerCase()) >= 0;
  }

  get valid() {
    return this.#valid === 1;
  }

  delete(){
    this.#valid = 0;
  }
}


