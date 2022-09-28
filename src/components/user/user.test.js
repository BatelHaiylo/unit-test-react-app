import { render, screen } from '@testing-library/react';
import User from './User.component';

test('testing table component', () => {
  render(<User fullName="Batel Haiylo"/>);
  const headerElement = screen.getByText("Batel Haiylo");
  expect(headerElement).toBeInTheDocument();
});