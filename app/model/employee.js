module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
  
    const Employee = app.model.define('employee', {
      name: STRING,
      pwd: STRING,
      deptId: INTEGER
    });
  
    return Employee;
  };