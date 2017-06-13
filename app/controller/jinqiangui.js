'use strict';

module.exports = app => {
  class JinQianguiController extends app.Controller {
    async index() {
      const data = await this.ctx.model.Jinqiangui.findOne({});
      if (!data) {
        await this.ctx.model.Jinqiangui.create({ qq: 34499559 });
      } else {
        const qq = data.qq || '34499559';
        this.ctx.body = {
          code: 0,
          data: qq,
        };
      }
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
    async payInfo() {
      const validate = new Date() < new Date('2017-07-12');
      this.ctx.body = {
        data: validate,
      };
    }
  }
  return JinQianguiController;
};
