import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../_UI/Config/Theme';
import BemVindo from '.';
import { BrowserRouter } from 'react-router-dom';

test('deve conter um link para para tela de login', () => {
  render(
    <ThemeProvider theme={theme}>
      <BemVindo />
    </ThemeProvider>
    , { wrapper: BrowserRouter })
  const links: HTMLAnchorElement[] = screen.getAllByRole("link");

  expect(links[0].title).toEqual("Entrar na Plataforma");
  expect(links[0].href).toContain("/login");

});