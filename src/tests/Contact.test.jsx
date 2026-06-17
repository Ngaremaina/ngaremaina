import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import emailjs from "@emailjs/browser";
import Contact from "../components/Contact";

describe("Contact", () => {
  beforeEach(() => {
    emailjs.send.mockClear();
    emailjs.send.mockResolvedValue({ status: 200, text: "OK" });
  });

  it("renders the heading and all form fields", () => {
    render(<Contact />);
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Your message")).toBeInTheDocument();
  });

  it("updates field values as the user types", async () => {
    render(<Contact />);
    const name = screen.getByLabelText("Your Name");
    await userEvent.type(name, "Jane Doe");
    expect(name).toHaveValue("Jane Doe");
  });

  it("sends the form via EmailJS and shows a success alert", async () => {
    render(<Contact />);
    await userEvent.type(screen.getByLabelText("Your Name"), "Jane");
    await userEvent.type(screen.getByLabelText("Your Email Address"), "jane@example.com");
    await userEvent.type(screen.getByLabelText("Your message"), "Hello there");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(emailjs.send).toHaveBeenCalledTimes(1);
    const payload = emailjs.send.mock.calls[0][2];
    expect(payload).toMatchObject({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello there",
    });

    expect(await screen.findByRole("alert")).toHaveTextContent("Email sent successfully!");
  });

  it("shows an error alert when sending fails", async () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    emailjs.send.mockRejectedValueOnce(new Error("network down"));

    render(<Contact />);
    await userEvent.type(screen.getByLabelText("Your Name"), "Jane");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent("Error sending email."),
    );
    consoleError.mockRestore();
  });
});
