
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar";


describe("Nav Bar component", () => {
    it("renders twolinks", () => {
      // since screen does not have the container property, we'll destructure render to obtain a container for this test
      const { container } = render(<NavBar />);
      expect(container).toMatchSnapshot();
    });
  
  //   it("renders Shop Page after link click", async () => {
  //     const user = userEvent.setup();
  
  //     render(<App />);
  //     const button = screen.getByRole("button", { name: "Click Me" });
  
  //     await user.click(button);
  
  //     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  //   });
  });