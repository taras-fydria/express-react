import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import Tank from './Tank';
import {Station} from "./Station";

@Entity()
export default class FuelType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'float', nullable: false})
  price!: number;

  @OneToMany(()=>Tank, tank =>tank.fuelType)
  tanks!:Tank[];

  @ManyToMany(()=>Station)
  stations?:Station[]
}
