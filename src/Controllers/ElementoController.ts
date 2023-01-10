import { Request, Response } from "express";
import { elementoRepository } from "../repositories/elementoRepository";
export class ElementoController {
    async create(req: Request, res: Response){
        const { nome, fraqueza } = req.body
        if (!nome || !fraqueza) {
            const message = "Erro no envio das informações, verificar body da requisição."
            return res.status(400).send(message)
        } 
        
        try {
            const newElemento = elementoRepository.create({ nome: nome, fraqueza: fraqueza });
            await elementoRepository.save(newElemento)
            return res.status(201).json({message: nome, fraqueza: fraqueza})
        } catch(error){
            const message = "Internal Server Error."
            console.log(error)
            return res.status(500).send(message)
        }
    }
    async list(req: Request, res: Response){
        try{
            const elemento = await elementoRepository.find({})
            return res.json(elemento)
         } catch(error) {
                const message = "Internal Server Error."
                console.log(error)
                return res.status(500).send(message)

        }
    }
    async getIndividual(req: Request, res: Response){
        const { id } = req.params
        try{
            const elemento = await elementoRepository.findOne({ })
                if (elemento === null){
                const message = {"message": "Pokemon nao encontrado"} 
                return res.status(404).json(message)
            }
            return res.json(elemento)} 
            catch(error) {
                const message = "Internal Server Error."
                console.log(error)
                return res.status(500).send(message)

        }
    }
    async update(req: Request, res: Response){
        const { id } = req.params
        const { nome, fraqueza  } = req.body
        if (!nome && !fraqueza){
            const message = {"message": "Impossível atualizar sem informações no body"} 
            return res.status(400).json(message)
        }
        try { 
            elementoRepository.update(id, {"nome": nome,  "fraqueza": fraqueza})
            const message = {"pokemon": nome, "fraqueza": fraqueza}
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
            elementoRepository.delete(id)
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