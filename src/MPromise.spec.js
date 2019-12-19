import MPromise from "./MPromise";

describe("Promise", () => {
  jest.useFakeTimers();

  it("should resolve a Promise", () => {
    expect.assertions(1);

    const promise = new MPromise(resolve => {
      setTimeout(() => resolve(Math.PI), 1000);
    });

    promise.then(result => expect(result).toBe(Math.PI));

    jest.advanceTimersByTime(1000);
  });

  it("should resolve transform data via then chain", () => {});

  it("should catch an error", () => {});
});
