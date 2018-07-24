'use strict';
module.exports = {
  Query: {
    department(root, { id }, ctx) {
      return ctx.connector.departent.fetchByIds(id);
    },
  },
  Mutation: {
    createDept(root, args, ctx) {
      return ctx.connector.departent.create(args);
    }
  }
};