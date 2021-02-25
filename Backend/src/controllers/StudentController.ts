import {Request, Response} from 'express';
import connection from "../database/connection";

interface Student {
    first_name: string;
    last_name: string;
    class: string;
    age: number;
    schedule: string;
}

export default {
  async createStudent(req:Request, res: Response) {
    const data:Student = req.body;

    try {
      const response = await connection("students").insert({
        age: data.age,
        first_name: data.first_name,
        last_name: data.last_name,
        class: data.class,
        schedule: data.schedule,
      })

      res.status(200).json("Estudante criado com sucesso!");

    } catch (error) {
      console.log(error);
      res.status(500).json("Erro ao criar usuário --> " + error);
    }
  },

  async index(req:Request, res: Response){
    try {
      const response = await connection("students").select('*');

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Erro ao listar estudantes! --> " + error)
    }
  }
};
