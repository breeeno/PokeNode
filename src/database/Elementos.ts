import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pokemons } from "./Pokemons";

@Entity("elemento")
export class Elementos {
    @PrimaryGeneratedColumn() 
    id: number; 
    @Column({type: 'text', unique: true, nullable: false })
    nome: string;
    @Column({type: 'text', unique: true, nullable: false })
    fraqueza: string;
    @OneToMany(() => Pokemons, pokemon => pokemon.elemento)
    pokemons: Pokemons[]
}