import { prisma } from "../database/database";

export class TodoService {
    public async getTodos() {
        let resData = {} as any
        let resError = {} as any

        try {
            const todos = await prisma.todo.findMany();
            resData = {
                status: 200,
                error: false,
                data: todos,
                message: "Todos fetched successfully",
            };
        } catch (error) {
            resError = {
                status: 500,
                error: true,
                message: "Internal server error",
            };
        }
        return [resData, resError]
    }

    public async createTodo(data: any) {
        let resData = {} as any
        let resError = {} as any

        try {
            const todo = await prisma.todo.create({
                data: {
                    title: data.title,
                    Description: data.Description,
                    completed: data.completed,
                },
            });
            resData = {
                status: 201,
                error: false,
                data: todo,
                message: "Todo created successfully",
            };
        } catch (error) {
            resError = {
                status: 500,
                error: true,
                message: "Internal server error",
            };
        }
        return [resData, resError]
    }
}