'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      user_id: DataTypes.INTEGER,
      payment_date: DataTypes.DATE,
      type: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  )
  return Transaction
}
