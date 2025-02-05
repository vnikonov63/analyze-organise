import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import LanguageInput from "../LanguageInput";

test("snapshot testing with nothing in cart", () => {
  const { asFragment } = render(<LanguageInput />);
  expect(asFragment()).toMatchSnapshot();
});
