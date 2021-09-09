'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'flavor_brands',
       'created_by',
       {
        type: Sequelize.STRING,
       }
      )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn(
      'flavor_brands',
      'created_by'
     )
  }
};
