import { checkType } from "../../src/fp/checkType";

describe("checkType", () => {
  it("works", () => {
    expect(checkType(String)("Curry")).toBe("Curry");
    expect(checkType(Number)(3)).toBe(3);
    const obj = {};
    expect(checkType(Object)(obj)).toBe(obj);
    const now = new Date();
    expect(checkType(Date)(now)).toBe(now);
    expect(() => {
      checkType(String)(42);
    }).toThrow(TypeError);
  });
});
