'use strict';

module.exports = app => {
  app.get('/api/jinqiangui/qq', 'jinqiangui.index');
  app.post('/api/jinqiangui/qq/:qq', 'jinqiangui.update');
  app.get('/api/jinqiangui/pay-info', 'jinqiangui.payInfo');
};
