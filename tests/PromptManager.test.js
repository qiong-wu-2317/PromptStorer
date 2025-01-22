import PromptManager from "../solution/PromptManager.js";
import TextPrompt from "../solution/TextPrompt.js";

describe("PromptManager", () => {
  let manager;
  let prompt;

  beforeEach(() => {
    manager = new PromptManager();
    prompt = new TextPrompt();
  });

  test("should add a prompt to the manager", () => {
    manager.addPrompt(prompt);
    expect(manager.prompts).toContain(prompt);
  });

  test("should iterate over prompts", () => {
    manager.addPrompt(prompt);
    const iterator = manager[Symbol.iterator]();
    expect(iterator.next().value).toBe(prompt);
    expect(iterator.next().done).toBe(true);
  });

  test("should filter prompts based on criteria", () => {
    // Add filtering logic and tests here
  });
});
