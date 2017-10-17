module.exports = options => {
  return function* log(next) {
    console.log(this.url);
    yield next;
  };
};
