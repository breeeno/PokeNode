import { AppDataSource } from "../data-source";
import { Pokemons } from "../database/Pokemons";

export const pokemonRepository = AppDataSource.getRepository(Pokemons)