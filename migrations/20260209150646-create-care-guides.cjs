'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CareGuides', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      species: {
        type: Sequelize.STRING,
        allowNull: false
      },
      watering: {
        type: Sequelize.JSON,   // ✅ matches your seeder’s JSON.stringify
        allowNull: true
      },
      sunlight: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fertilizer: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pruning: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('CareGuides');
  }
};