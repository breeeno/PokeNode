import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Elementos } from "./Elementos";

@Entity("pokemon")
export class Pokemons {
    @PrimaryGeneratedColumn() 
    id: number; 
    @Column({type: 'text', unique: true, nullable: false })
    nome: string;
    @Column({type: 'text', unique: false, nullable: false })
    regiao: string;
    @ManyToOne(() => Elementos, elemento => elemento.id)
    @JoinColumn({name: "elemento_id"})
    elemento: Elementos[]

}