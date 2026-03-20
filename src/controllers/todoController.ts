import { Request, Response } from "express";

export async function createTodo(req: Request, res: Response) {}

export async function getAllTodos(req: Request, res: Response) {
    res.json("Deu certo no controller do todo kk")
}

export async function getTodo(req: Request, res: Response) {}

export async function updateTodo(req: Request, res: Response) {}

export async function toggleCompleted(req: Request, res: Response) {}

export async function removeTodo(req: Request, res: Response) {}