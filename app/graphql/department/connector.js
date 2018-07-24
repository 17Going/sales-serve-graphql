'use strict';

const DataLoader = require('dataloader');

class DeptConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(ids) {
    const depts = this.ctx.app.model.Department.findAll({
      where: {
        id: {
          $in: ids,
        },
      },
    }).then(us => us.map(u => u.toJSON()));
    return depts;
  }

  fetchByIds(ids) {
    return this.loader.loadMany(ids);
  }

  fetchById(id) {
    return this.loader.load(id);
  }

  create(name, name_dd){
    const dept = this.ctx.app.model.Department.create({
      name,
      name_dd
    });
    return dept;
  }
}

module.exports = DeptConnector;

