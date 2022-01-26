import DataBase from '../DataBase'
import {INTEGER, STRING} from 'sequelize'

export const Station = DataBase.define('Station', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  address: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  tel:{
    type:STRING,
    allowNull: false,
  },
})

const FuelType = DataBase.define('FuelType', {
  name:{
    type:STRING, unique:true, allowNull:false
  },
  price:{
    type:INTEGER, allowNull: false,
  }
})

const Region = DataBase.define('Region',   {
  id:{
    type:INTEGER, primaryKey:true, autoIncrement:true
  },
  name:{
    type:STRING, primaryKey:true, allowNull:false, unique:true
  }
})

const Tank = DataBase.define('Tank', {
  id: {type: INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: STRING},
  volume:{type:INTEGER},
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