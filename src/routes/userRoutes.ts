import { Router } from "express";
import { createUser, getAllUsers, getUser, removeUser, updateUser } from "../controllers/userControllers";

const userRouter = Router()

userRouter.get('/users', getAllUsers)
userRouter.get(`/users/:id`, getUser)
userRouter.post('/users', createUser)
userRouter.put(`/users/:id`, updateUser)
userRouter.delete(`/users/:id`, removeUser);

export default userRouter