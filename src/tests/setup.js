import "@testing-library/jest-dom";
import { vi, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());

// react-scroll attaches real scroll listeners to window/elements that aren't
// useful in jsdom. Replace Element/Link with lightweight DOM stand-ins so tests
// can assert on content and interactions deterministically.
vi.mock("react-scroll", async () => {
  const React = await import("react");

  const Element = ({ children, name, ...rest }) =>
    React.createElement("div", { "data-element": name, ...rest }, children);

  const Link = ({ children, to, ...rest }) => {
    // Drop react-scroll-only props so they aren't forwarded as DOM attributes.
    ["spy", "smooth", "offset", "duration", "activeClass"].forEach((p) => delete rest[p]);
    return React.createElement("a", { href: `#${to}`, ...rest }, children);
  };

  return { Element, Link };
});

// Analytics renders a tracking pixel/script we don't want in tests.
vi.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

// EmailJS makes a network call on submit; default to a resolved send.
vi.mock("@emailjs/browser", () => ({
  default: { send: vi.fn(() => Promise.resolve({ status: 200, text: "OK" })) },
}));
