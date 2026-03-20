import { Request, Response } from "express";

export async function createGroup(req: Request, res: Response) {}

export async function getAllGroups(req: Request, res: Response) {
    res.json("Deu certo no controller do group kk")
}

export async function getGroup(req: Request, res: Response) {}

export async function updateGroup(req: Request, res: Response) {}

export async function removeGroup(req: Request, res: Response) {}