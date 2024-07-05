Array.prototype.last = function () {
  if (this[this.length - 1] === null) {
    return null;
  }
  if (this[this.length - 1] === undefined) {
    return -1;
  }
  return this[this.length - 1];
};
