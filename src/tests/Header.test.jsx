import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import NavBar from "../components/Header";

describe("NavBar", () => {
  it("renders the profile name and every navigation item", () => {
    render(<NavBar />);
    expect(screen.getByRole("heading", { name: "Owen Maina" })).toBeInTheDocument();
    ["Home", "About", "Projects", "Skills", "Background", "Contact"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders accessible social links", () => {
    render(<NavBar />);
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/Ngaremaina",
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/owen-ngare-maina/",
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:mainaowen1997@gmail.com",
    );
  });

  it("is hidden off-canvas when closed and slides in when open", () => {
    const { container, rerender } = render(<NavBar isOpen={false} />);
    expect(container.querySelector("header").className).toContain("-translate-x-full");

    rerender(<NavBar isOpen />);
    expect(container.querySelector("header").className).toContain("translate-x-0");
  });

  it("calls onNavigate when a nav link is clicked", async () => {
    const onNavigate = vi.fn();
    render(<NavBar onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText("About"));
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });
});
