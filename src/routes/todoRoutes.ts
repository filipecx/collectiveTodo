import { Router } from "express";
import { getAllTodos, getTodo, removeTodo, toggleCompleted, updateTodo } from "../controllers/todoController";

const todoRouter = Router()

todoRouter.get('todos', getAllTodos)
todoRouter.get(`/todos/:id`, getTodo)
todoRouter.put(`/todos/:id`, updateTodo)
todoRouter.patch(`/todos/toggle-completed`, toggleCompleted)
todoRouter.delete(`/todos/:id`, removeTodo);

export default todoRouter