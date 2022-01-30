import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import Tank from './Tank';

@Entity()
export class Station {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    unique: true,
    zerofill: false,
  })
  name: string;

  @Column({
    type: 'text',
    unique: true,
    zerofill: false,
  })
  address: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  tel: string;

  @OneToMany(() => Tank, tanks => tanks.station)
  tanks: Tank[];
}
