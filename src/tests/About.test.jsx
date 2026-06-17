import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../pages/About";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  it("renders the detail rows", () => {
    render(<About />);
    expect(screen.getByText("City:")).toBeInTheDocument();
    expect(screen.getByText("Nairobi Kenya")).toBeInTheDocument();
    expect(screen.getByText("Degree:")).toBeInTheDocument();
  });

  it("links the website and the email address", () => {
    render(<About />);
    const links = screen.getAllByRole("link", { name: "Owen Maina" });
    const hrefs = links.map((link) => link.getAttribute("href"));
    expect(hrefs).toContain("https://owenmaina.netlify.app/");
    expect(hrefs).toContain("mailto:mainaowen1997@gmail.com");
  });
});
