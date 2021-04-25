import { MyTestClass } from "../MyTestClass";

describe("some dummy", () => {
  it("should just run", () => {
    const c = new MyTestClass();
    expect(c.doSomething()).toEqual("Yes");
  });
});
