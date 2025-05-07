"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Teachers", "password", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "changeme",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Teachers", "password");
  },
};
