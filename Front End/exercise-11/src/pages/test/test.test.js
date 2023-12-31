import { render, screen } from "@testing-library/react";
import TestPage from ".";
import Header from "./header";
import "@testing-library/jest-dom";

describe("Test", () => {
  test("renders Test component", () => {
    render(<Header title={"ini title"} />);
    const headerElement = screen.getByText(/ini title/i);
    expect(headerElement).toBeInTheDocument();
  });
});
