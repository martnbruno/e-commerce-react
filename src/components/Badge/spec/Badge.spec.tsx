import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Badge from "../Badge";
import { theme } from "../../../theme";
import { LITERALS } from "./constants";
import { getBadge } from "./selectors";

const renderComponent = (text: string, theme: {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Badge text={text} />
    </ThemeProvider>
  );

describe("Badge unit test", () => {
  it("should render text", () => {
    renderComponent(LITERALS.TEXT, theme);
    const badge = getBadge(LITERALS.TEXT);
    expect(badge).toBeInTheDocument();
  });
});