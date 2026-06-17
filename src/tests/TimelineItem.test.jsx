import { render, screen } from "@testing-library/react";
import TimelineItem from "./TimelineItem";

describe("TimelineItem component", () => {
  it("renders children correctly", () => {
    render(<TimelineItem>Timeline Content</TimelineItem>);

    expect(screen.getByText("Timeline Content")).toBeInTheDocument();
  });

  it("applies the correct wrapper classes", () => {
    const { container } = render(
      <TimelineItem>Test</TimelineItem>
    );

    const wrapper = container.firstChild;

    expect(wrapper).toHaveClass("relative");
    expect(wrapper).toHaveClass("border-l-2");
    expect(wrapper).toHaveClass("border-[#1f5297]");
    expect(wrapper).toHaveClass("pb-6");
    expect(wrapper).toHaveClass("pl-6");
  });

  it("renders the timeline dot element", () => {
    const { container } = render(
      <TimelineItem>Test</TimelineItem>
    );

    const dot = container.querySelector("span");

    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass("absolute");
    expect(dot).toHaveClass("-left-[9px]");
    expect(dot).toHaveClass("top-0");
    expect(dot).toHaveClass("h-4");
    expect(dot).toHaveClass("w-4");
    expect(dot).toHaveClass("rounded-full");
    expect(dot).toHaveClass("border-2");
    expect(dot).toHaveClass("border-[#1f5297]");
    expect(dot).toHaveClass("bg-white");
  });
});