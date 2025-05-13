import express, { Request, Response, Express } from "express";
import TodoRoutes from "./src/routes/todo_routes";
import bodyParser from "body-parser";

const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

TodoRoutes(app)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});