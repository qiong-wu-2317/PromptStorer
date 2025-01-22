import TextPrompt from "../solution/TextPrompt.js";

describe("TextPrompt", () => {
  let prompt;

  beforeEach(() => {
    prompt = new TextPrompt();
  });

  test("should create a TextPrompt instance with default values", () => {
    expect(prompt.id).toBe(1234);
    expect(prompt.model).toBe("Claude");
    expect(prompt.version).toBe("Sonnet 3.5");
    expect(prompt.result).toBe("Success");
    expect(prompt.type).toBe("Text-to-Text");
    expect(prompt.input).toBe("Please translate Eng-to-French: 'Hello, world!'");
    expect(prompt.output).toBe("Bonjour, le monde!");
  });

  test("should return correct string representation", () => {
    const expectedString = `⭐️ Prompt 1234 (${prompt.date}) Claude Sonnet 3.5 - Success
    Input: Please translate Eng-to-French: 'Hello, world!'
    Output: Bonjour, le monde!`;
    expect(prompt.toString()).toBe(expectedString);
  });

  test("should return correct values for getters", () => {
    expect(prompt.date).toBeInstanceOf(Date);
    expect(prompt.result).toBe("Success");
    expect(prompt.id).toBe(1234);
    expect(prompt.model).toBe("Claude");
    expect(prompt.version).toBe("Sonnet 3.5");
    expect(prompt.type).toBe("Text-to-Text");
    expect(prompt.input).toBe("Please translate Eng-to-French: 'Hello, world!'");
    expect(prompt.output).toBe("Bonjour, le monde!");
  });
});
