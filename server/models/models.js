const sequelize = require('../sequelize')
const {DataTypes, STRING} = require('sequelize')

const Station = sequelize.define('Station', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true},
    address:{type:STRING, unique: true}
})

module.exports = {
    Station
}