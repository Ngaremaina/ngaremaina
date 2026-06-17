import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../pages/Projects";
import { projects } from "../data/data";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: "Personal Projects" }),
    ).toBeInTheDocument();
  });

  it("renders a card for every project in the data", () => {
    render(<Projects />);
    projects.forEach((project) => {
      expect(
        screen.getByRole("heading", { name: project.name }),
      ).toBeInTheDocument();
    });
  });

  it("links each project to its live URL and opens safely in a new tab", () => {
    render(<Projects />);
    projects.forEach((project) => {
      const link = screen.getByRole("link", { name: new RegExp(project.name, "i") });
      expect(link).toHaveAttribute("href", project.link);
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
