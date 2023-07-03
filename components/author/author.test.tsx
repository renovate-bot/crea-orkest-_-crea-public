import { Author } from "./author";
import React from "react";

import { render, screen } from "@testing-library/react";

test("loads and displays greeting", () => {
  render(<Author name="test" />);

  expect(screen.getByText("test")).toBeTruthy();
});
