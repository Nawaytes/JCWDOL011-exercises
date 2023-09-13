import axios from "axios";
import configConstants from "../config/constants";
import { IExpense } from "../interface/expense.interface";
import { ISearchExpense } from "../interface/searchExpense.interface";

export class ExpenseService {
  async getAll(input: ISearchExpense) {
    try {
      const queryParams = [];
      console.log(input);
      if (input.fromDate) {
        queryParams.push(`date_gte=${input.fromDate}`);
      }
      if (input.toDate) {
        queryParams.push(`date_lte=${input.toDate}`);
      }
      if (input.category) {
        queryParams.push(`category=${input.category}`);
      }
      const queryString = queryParams.join("&");

      const url = `${configConstants.API_URL}/expenses${
        queryString ? `?${queryString}` : ""
      }`;
      const response = await axios.get<IExpense[]>(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string) {
    try {
      const data = await axios.get<IExpense>(
        `${configConstants.API_URL}/expenses/${id}`
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, expense: IExpense) {
    try {
      const data = await axios.patch<IExpense>(
        `${configConstants.API_URL}/expenses/${id}`,
        expense
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      if (!id) {
        throw new Error("Id is required");
      }
      const data = await axios.delete<IExpense>(
        `${configConstants.API_URL}/expenses/${id}`
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}
