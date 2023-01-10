import { Router } from "express";
import { PokemonController } from "./Controllers/PokemonController";
import { ElementoController } from "./Controllers/ElementoController";

const routes = Router();

// rotas pokemon
routes.post("/pokemon", new PokemonController().create)
routes.get("/pokemon", new PokemonController().list)
routes.get("/pokemon/:id", new PokemonController().getIndividual)
routes.patch("/pokemon/:id", new PokemonController().update)
routes.delete("/pokemon/:id", new PokemonController().delete)

 // rotas elemento
routes.post("/elemento", new ElementoController().create)
routes.post("/elemento", new ElementoController().list)
routes.post("/elemento/:id", new ElementoController().getIndividual)
routes.post("/elemento/:id", new ElementoController().update)
routes.post("/elemento/:id", new ElementoController().delete)


export default routes