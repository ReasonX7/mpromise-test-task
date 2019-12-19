const MPromise = require('./MPromise');

describe("Promise", () => {
  jest.useFakeTimers();

  it("should resolve a Promise", (done) => {
    expect.assertions(1);

    const promise = new MPromise(resolve => {
      setTimeout(() => resolve(Math.PI), 1000);
    });

    promise.then(result => {
      expect(result).toBe(Math.PI);
      done();
    });

    jest.advanceTimersByTime(1000);
  });

  it("should resolve transform data via then chain", (done) => {
    expect.assertions(1);

    const promise = new MPromise(resolve => {
      setTimeout(() => resolve(1), 1000);
    });

    promise
      .then(result => result + 2)
      .then(result => result + 3)
      .then(result => result + 4)
      .then((result) => {
        expect(result).toBe(10);
        done();
      });

    jest.advanceTimersByTime(1000);
  });
});
