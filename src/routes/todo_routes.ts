import { Express } from 'express';
import { TodoController } from '../controllers/todo_controllers';

export default function TodoRoutes(app: Express) {

    const ctrlTodo = new TodoController();

    app.get("/v1/todos", ctrlTodo.getTodos);
    app.post("/v1/todos", ctrlTodo.createTodo);
}