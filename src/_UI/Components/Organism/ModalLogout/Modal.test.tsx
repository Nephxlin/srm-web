import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ModalLogout from ".";
import theme from "../../../Config/Theme";

test("deve renderizar a ModalLogout", () => {
  render(
    <ThemeProvider theme={theme}>
      <ModalLogout close={() => { }} />
    </ThemeProvider>,
    {
      wrapper: BrowserRouter,
    }
  );

  const modal = screen.getAllByTestId("modalLogout");
  expect(modal).toBeInTheDocument;
});
