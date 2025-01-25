class Attachment{
  type = "";
  payload = "";

  constructor({
    type = "",
    payload = ""
  } = {}) {
    this.type = type;
    this.payload = payload;
  }

  toString() {
    return `type: ${this.type}, payload: ${this.payload}`;
  }
      
}

export default Attachment;