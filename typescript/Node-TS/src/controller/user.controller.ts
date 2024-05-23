import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    const userArray: string[] = ['Sourav', 'Julu', 'j', 'kjb']

    res.json({userArray})
}