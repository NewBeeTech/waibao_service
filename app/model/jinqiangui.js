'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const JinqianguiSchema = new mongoose.Schema({
    qq: { type: String },
  });

  return mongoose.model('Jinqiangui', JinqianguiSchema);
};
