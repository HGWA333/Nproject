const Sequelize = require("sequelize");

module.exports = class Nft extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
        },
        text: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        modelName: "Nft",
        tableName: "nft",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
};
