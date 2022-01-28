import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Station{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type:'string',
        unique:true,
        zerofill:false,
    })
    name!:string;

    @Column({
        type: 'string',
        unique:true,
        zerofill: false,
    })
    address!:string;
}