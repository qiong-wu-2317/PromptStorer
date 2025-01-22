import Attachment from "../solution/Attachment.js";

describe("Attachment", () => {
  let attachment;

  beforeEach(() => {
    attachment = new Attachment({ type: "image", payload: "image.jpg" });
  });

  test("should create an Attachment instance with given type and payload", () => {
    expect(attachment.type).toBe("image");
    expect(attachment.payload).toBe("image.jpg");
  });
});
