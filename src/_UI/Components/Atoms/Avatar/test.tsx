import { render, screen } from '@testing-library/react';
import Avatar from '.';

test('deve renderizar a o avatar ', () => {
  render(<Avatar image='https://github.com/rogeriorioli.png' />)
  const image = screen.getAllByTestId('avatar')
  expect(image[0]).toBeInTheDocument
});