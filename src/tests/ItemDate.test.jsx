import { render, screen } from "@testing-library/react";
import ItemDate from "./ItemDate";

describe("ItemDate component", () => {
  it("renders children correctly", () => {
    render(<ItemDate>2026-06-17</ItemDate>);

    expect(screen.getByText("2026-06-17")).toBeInTheDocument();
  });

  it("applies correct class names", () => {
    render(<ItemDate>Test Date</ItemDate>);

    const element = screen.getByText("Test Date");

    expect(element).toHaveClass("my-2");
    expect(element).toHaveClass("inline-block");
    expect(element).toHaveClass("bg-[#e4edf9]");
    expect(element).toHaveClass("px-3");
    expect(element).toHaveClass("py-1");
    expect(element).toHaveClass("text-sm");
    expect(element).toHaveClass("font-semibold");
    expect(element).toHaveClass("text-sidebar");
  });
});