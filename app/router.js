'use strict';

module.exports = app => {
  app.get('/api/jinqiangui/qq', 'jinqiangui.index');
  app.put('/api/jinqiangui/qq/:qq', 'jinqiangui.update');
};
