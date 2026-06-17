import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../pages/Home";

describe("Home", () => {
  it("renders the name and tagline", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Owen Maina" })).toBeInTheDocument();
    expect(
      screen.getByText("Software Developer | Software Engineer"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Experience with JavaScript and Python Programming"),
    ).toBeInTheDocument();
  });
});
