import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../_UI/Config/Theme';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '.';

test('deve renderizar a tela de 404', () => {
  render(
    <ThemeProvider theme={theme}>
      <NotFound />
    </ThemeProvider>
    , { wrapper: BrowserRouter })
  const notfound = screen.getAllByTestId("notFound");

  expect(notfound).toBeInTheDocument

});