import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Overlay from ".";
import theme from "../../../Config/Theme";

test("deve renderizar a ModalLogout", () => {
  render(
    <ThemeProvider theme={theme}>
      <Overlay fade={1} children={undefined} />
    </ThemeProvider>
  );

  const overlay = screen.getAllByTestId("overlay");
  expect(overlay).toBeInTheDocument
});
