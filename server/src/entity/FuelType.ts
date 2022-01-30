import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import Tank from './Tank';

@Entity()
export default class FuelType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'float', nullable: false})
  price: number;

  @OneToMany(()=>Tank, tank =>tank.fuelType)
  tanks:Tank[];
}
