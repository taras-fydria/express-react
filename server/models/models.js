const sequelize = require('../sequelize')
const {DataTypes, STRING} = require('sequelize')

const Station = sequelize.define('Station', {
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  address: {
    type: DataTypes.STRING,
    unique: true
  },
  tel:{
    type:DataTypes.STRING,
    allowNull: false
  },
})

const FuelType = sequelize.define('FuelType', {
  name:{
    type:STRING, unique:true, allowNull:false
  },
  price:{
    type:DataTypes.INTEGER, allowNull: false,
  }
})

const Region = sequelize.define('Region',   {
  id:{
    type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true
  },
  name:{
    type:DataTypes.STRING, primaryKey:true, allowNull:false, unique:true
  }
})

const Tank = sequelize.define('Tank', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  volume:{type:DataTypes.INTEGER},
})

Station.hasMany(Tank, {
  foreignKey: 'tankId'
})
Tank.belongsTo(Station)

FuelType.hasMany(Tank, {
  foreignKey: 'tankId'
})
Tank.belongsTo(FuelType)

module.exports = {
  Station,
  Tank,
  FuelType,
  Region
}