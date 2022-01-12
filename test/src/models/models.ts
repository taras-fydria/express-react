import DataBase from '../DataBase'
import {DataTypes, STRING}  from 'sequelize'

export const Station = DataBase.define('Station', {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  tel:{
    type:DataTypes.STRING,
    allowNull: false,
  },
})

const FuelType = DataBase.define('FuelType', {
  name:{
    type:STRING, unique:true, allowNull:false
  },
  price:{
    type:DataTypes.INTEGER, allowNull: false,
  }
})

const Region = DataBase.define('Region',   {
  id:{
    type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true
  },
  name:{
    type:DataTypes.STRING, primaryKey:true, allowNull:false, unique:true
  }
})

const Tank = DataBase.define('Tank', {
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

export default {
  Station,
  Tank,
  FuelType,
  Region
}