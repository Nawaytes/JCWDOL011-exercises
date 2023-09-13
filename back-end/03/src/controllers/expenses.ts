import axios, { AxiosError, HttpStatusCode } from "axios";
import { Request, Response } from "express";
import configConstants from "../config/constants";
import { ExpenseService } from "../service/expenseService";

export class ExpenseController {
  expenseService: ExpenseService;
  constructor() {
    this.expenseService = new ExpenseService();
  }
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const expense = await axios.post(
        `${configConstants.API_URL}/expenses`,
        data
      );
      res.status(HttpStatusCode.Ok).send({
        ...expense.data,
      });
    } catch (err: AxiosError | Error | any) {
      res.status(HttpStatusCode.InternalServerError).send({
        message: err.message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const input = req.query;
      const result = await this.expenseService.getAll({
        fromDate: input.fromDate as string,
        toDate: input.toDate as string,
        category: input.category as string,
      });
      res.status(HttpStatusCode.Ok).send({
        total: result.length,
        data: result,
      });
    } catch (error: any) {
      res.status(HttpStatusCode.InternalServerError).send({
        message: error.message,
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id; // Get the 'id' parameter from the URL
      // Use the 'id' to fetch the specific expense from your data source
      const expense = await this.expenseService.getById(id);
      if (expense) {
        res.status(HttpStatusCode.Ok).send(expense);
      } else {
        res
          .status(HttpStatusCode.NotFound)
          .json({ message: "Expense not found" });
      }
    } catch (error: any) {
      res.status(HttpStatusCode.InternalServerError).send({
        message: error.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id; // Get the 'id' parameter from the URL
      if (!id)
        res.status(HttpStatusCode.BadRequest).send({
          message: "Id is required",
        });
      const data = req.body;
      const expense = await this.expenseService.update(id, data);
      if (expense) {
        res.status(HttpStatusCode.Ok).send(expense);
      } else {
        res
          .status(HttpStatusCode.NotFound)
          .json({ message: "Expense not found" });
      }
    } catch (error: any) {
      res.status(HttpStatusCode.InternalServerError).send({
        message: error.message,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id; // Get the 'id' parameter from the URL
      // Use the 'id' to delete the specific expense from your data source
      const expense = await this.expenseService.delete(id);
      if (expense) {
        res.status(HttpStatusCode.Ok).send(expense);
      } else {
        res
          .status(HttpStatusCode.NotFound)
          .json({ message: "Expense not found" });
      }
    } catch (error: any) {
      res.status(HttpStatusCode.InternalServerError).send({
        message: error.message,
      });
    }
  }
}
