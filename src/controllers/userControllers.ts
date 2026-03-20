import { Request, Response } from "express";
import { prisma } from "../server";
import { User, UserProps } from "../classes/user";

export interface UserResponse {
    id: string
    username: string
}


export async function createUser(req: Request, res: Response) {
    try {
        const newUser = await prisma.users.create({
        data: {
            username: req.body.username,
            password: req.body.password,
        },
        })

        const persistedUser: UserResponse = ({
            id: newUser.id,
            username: newUser.username

        })

        res.status(201).json(persistedUser)
    } catch (error) {
        res.status(500).json("Could not create a new user")
        console.error("Could not create a new user: " + error)
    }
    
}

export async function getAllUsers(req: Request, res: Response) {
    res.json("Deu certo no controller do user kk")
}

export async function getUser(req: Request, res: Response) {}

export async function updateUser(req: Request, res: Response) {}

export async function removeUser(req: Request, res: Response) {}