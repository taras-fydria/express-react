import {Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Station} from './Station';
import FuelType from './FuelType';

@Entity()
export default class Tank {

  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Station, station => station.tanks)
  station!: number;

  @ManyToOne(()=>FuelType, fuelType=> fuelType.tanks)
  fuelType!: number;
}
