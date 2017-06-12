'use strict';

module.exports = app => {
  class JinQianguiController extends app.Controller {
    async index() {
      const data = await this.ctx.model.Jinqiangui.findOne({});
      const qq = data.qq || '34499559';
      this.ctx.body = {
        code: 0,
        data: qq,
      };
    }
    async update() {
      const qq = this.ctx.params.qq;
      const result = await this.ctx.model.Jinqiangui.findOneAndUpdate({}, { qq });
      if (result) {
        this.ctx.body = {
          code: 0,
          data: true,
        };
      }
    }
  }
  return JinQianguiController;
};
