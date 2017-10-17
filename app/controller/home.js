'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * page() {
      this.ctx.body = {
        msg: 'hello, world'
      };
    }
  }
  return HomeController;
};
