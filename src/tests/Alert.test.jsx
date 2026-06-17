import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders the message and the type label", () => {
    render(<Alert message="Email sent successfully!" type="success" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Email sent successfully!")).toBeInTheDocument();
    expect(screen.getByText("success:")).toBeInTheDocument();
  });

  it("applies success styling for the success type", () => {
    render(<Alert message="Done" type="success" />);
    expect(screen.getByRole("alert").className).toContain("text-green-800");
  });

  it("applies error styling for the error type", () => {
    render(<Alert message="Oops" type="error" />);
    expect(screen.getByRole("alert").className).toContain("text-red-800");
  });

  it("falls back to info styling for an unknown type", () => {
    render(<Alert message="Heads up" type="banana" />);
    expect(screen.getByRole("alert").className).toContain("text-blue-800");
  });
});
