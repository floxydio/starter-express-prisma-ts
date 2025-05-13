import { Request, Response } from "express";
import { TodoService } from "../service/todo_service";

export class TodoController {
    public async getTodos(req: Request, res: Response): Promise<Response> {
        const todoService = new TodoService();
        const [success, err] = await todoService.getTodos();
        if (err.error) {
            return res.status(err.status).json(err);
        } else {
            return res.status(success.status).json(success);
        }
    }

    public async createTodo(req: Request, res: Response): Promise<Response> {
        const todoService = new TodoService();
        const [success, err] = await todoService.createTodo(req.body);
        if (err.error) {
            return res.status(err.status).json(err);
        } else {
            return res.status(success.status).json(success);
        }
    }
}