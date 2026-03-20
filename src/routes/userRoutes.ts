import { Request, Response, Router } from "express";

const userRouter = Router()

userRouter.get('/users', (req: Request, res: Response) => {res.json("Deu certo aqui no user")})

export default userRouter