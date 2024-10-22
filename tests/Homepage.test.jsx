
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/components/Homepage";

describe("Homepage component", () => {
  it("renders brand name and an image", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });

//   it("renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<App />);
//     const button = screen.getByRole("button", { name: "Click Me" });

//     await user.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
});
