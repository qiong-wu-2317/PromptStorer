import PromptInterface from "../solution/PromptInterface.js";

describe("PromptInterface", () => {
  let promptInterface;

  beforeEach(() => {
    promptInterface = new PromptInterface();
  });

  test("should throw error when toString is called", () => {
    expect(() => promptInterface.toString()).toThrow("Not implemented. e.g. \"2025/01/17 2:28PM - Success\"");
  });

  test("should throw error when date is accessed", () => {
    expect(() => promptInterface.date).toThrow("Not implemented. e.g. 2025/01/17 2:28PM");
  });

  test("should throw error when result is accessed", () => {
    expect(() => promptInterface.result).toThrow("Not implemented. e.g. \"Success\"");
  });

  test("should throw error when id is accessed", () => {
    expect(() => promptInterface.id).toThrow("Not implemented. e.g. 1234");
  });

  test("should throw error when model is accessed", () => {
    expect(() => promptInterface.model).toThrow("Not implemented. e.g. Claude");
  });

  test("should throw error when version is accessed", () => {
    expect(() => promptInterface.version).toThrow("Not implemented: e.g. Sonnet 3.5");
  });

  test("should throw error when type is accessed", () => {
    expect(() => promptInterface.type).toThrow("Not implemented: e.g. Text-to-Text");
  });
});
