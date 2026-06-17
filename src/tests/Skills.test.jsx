import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skills from "../pages/Skills";
import { skills } from "../data/data";

describe("Skills", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders a labelled progress bar for every skill", () => {
    render(<Skills />);
    const bars = screen.getAllByRole("progressbar");
    expect(bars).toHaveLength(skills.length);

    skills.forEach((skill) => {
      const bar = screen.getByRole("progressbar", { name: skill.name });
      expect(bar).toHaveAttribute("aria-valuenow", String(skill.level));
    });
  });
});
