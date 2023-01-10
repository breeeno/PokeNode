import e from "express";
import { AppDataSource } from "../data-source";
import { Elementos } from "../database/Elementos";

export const elementoRepository = AppDataSource.getRepository(Elementos)