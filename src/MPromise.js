class MPromise {
  constructor(callback) {
    setTimeout(() => {
      let result = undefined;
      const onResolve = this.onResolve;

      callback((res) => {
        result = res;
        onResolve && onResolve(result);
      });

      setTimeout(() => {
        this.nextResolve && this.nextResolve(result);
      });
    });
  }

  then(onResolve) {
    this.onResolve = onResolve;

    return new MPromise((resolve) => {
      this.nextResolve = resolve;
    });
  }

  catch(onReject) {}
}

module.exports = MPromise;
