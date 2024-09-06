import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IAtencion {
    Id: number;
    IdBloqueHora: number;
    IdPaciente: number;
}
@Entity({name:"Atenciones"})
export class Atencion extends BaseEntity implements IAtencion{
    @PrimaryGeneratedColumn()
    public Id!: number;
    @Column({type:"int",name:"IdBloqueHora"})
    public IdBloqueHora!: number;
    @Column({type:"int",name:"IdPaciente"})
    IdPaciente!: number;
}