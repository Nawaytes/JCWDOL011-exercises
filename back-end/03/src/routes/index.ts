import { Request, Response, Router } from "express";
import { ExpenseController } from "../controllers/expenses";

export default class MainRouter {
  router: Router;
  expenseController: ExpenseController;

  constructor() {
    // Initialize controllers objects
    this.expenseController = new ExpenseController();

    // Initialize router object
    this.router = Router({ mergeParams: true });
    this.userRoutes();
  }

  private userRoutes() {
    this.router.get("/", (req, res) => {
      res.json({
        message: "Welcome to the API",
      });
    });

    this.router.get("/expense/:id", (req: Request, res: Response) =>
      this.expenseController.getById(req, res)
    );

    this.router.put("/expense/:id", (req: Request, res: Response) =>
      this.expenseController.update(req, res)
    );

    this.router.delete("/expense/:id", (req: Request, res: Response) =>
      this.expenseController.delete(req, res)
    );

    this.router
      .route("/expense")
      .post(this.expenseController.create)
      .get((req: Request, res: Response) =>
        this.expenseController.getAll(req, res)
      );
  }
}
