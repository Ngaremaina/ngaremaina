import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Background from "../pages/Background";
import { experience, education, certifications } from "../data/data";

describe("Background", () => {
  it("renders the section heading and column titles", () => {
    render(<Background />);
    expect(screen.getByRole("heading", { name: "My Background" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Education" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Certifications" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Internship Experience" }),
    ).toBeInTheDocument();
  });

  it("renders every experience, education and certification entry", () => {
    render(<Background />);
    [...experience, ...education, ...certifications].forEach((item) => {
      expect(screen.getByRole("heading", { name: item.title })).toBeInTheDocument();
    });
  });

  it("renders the bullet roles for an experience entry", () => {
    render(<Background />);
    expect(screen.getByText(experience[0].roles[0])).toBeInTheDocument();
  });
});
