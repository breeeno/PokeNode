import { Request, Response } from "express"
import { pokemonRepository } from "../repositories/pokemonRepository"

export class PokemonController {
    async create(req: Request, res: Response){
        const { nome, regiao, elemento_id } = req.body
        if (!nome || !regiao) {
            const message = "Erro no envio das informações, verificar body da requisição."
            return res.status(400).send(message)
        }

        try {
            const newPokemon = pokemonRepository.create({ nome: nome, regiao: regiao, elemento: elemento_id})
            await pokemonRepository.save(newPokemon)
            return res.status(201).json({nome: nome, regiao: regiao, elemento_id: elemento_id})
        } catch(error) {
            const message = "Internal Server Error."
            console.log(error)
            return res.status(500).send(message)
        }
        
    }
    async list(req: Request, res: Response){
        try{
            const pokemon = await pokemonRepository.find({
                relations: {
                    elemento: true
                }    
            })
            return res.json(pokemon)
         } catch(error) {
                const message = "Internal Server Error."
                console.log(error)
                return res.status(500).send(message)

        }
    }
    async getIndividual(req: Request, res: Response){
        const { id } = req.params
        try{
            const pokemon = await pokemonRepository.findOne({ 
              where: {id: Number(id)}, 
              relations: {
                elemento: true
              } 
            })
                if (pokemon === null){
                const message = {"message": "Pokemon nao encontrado"} 
                return res.status(404).json(message)
            }
            return res.json(pokemon)} 
            catch(error) {
                const message = "Internal Server Error."
                console.log(error)
                return res.status(500).send(message)

        }
    }
    async update(req: Request, res: Response){
        const { id } = req.params
        const { nome, regiao, elemento_id } = req.body
        if (!nome && !regiao && !elemento_id){
            const message = {"message": "Impossível atualizar sem informações no body"} 
            return res.status(400).json(message)
        }
        try { 
            pokemonRepository.update(id, {"nome": nome, "regiao": regiao, "elemento": elemento_id})
            const message = {"pokemon": nome, "regiao": regiao}
            return res.status(200).json(message)
        }  catch(error) {
            const message = "Internal Server Error."
            console.log(error)
            return res.status(500).send(message)

    }
    }
    async delete(req: Request, res: Response){
        const { id } = req.params
        try {
            pokemonRepository.delete(id)
            const message = {"message": "Pokémon deletado com sucesso"}
            return res.status(200).json(message)
        }
        catch(error) {
            const message = "Internal Server Error."
            console.log(error)
            return res.status(500).send(message)

    }
    }
} 