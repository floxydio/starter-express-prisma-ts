import { Express } from 'express';
import TodoRoutes from './todo_routes';

export default function Routes(app: Express) {
    TodoRoutes(app);

}