import { render, screen } from '@testing-library/react';
import Student from './Student.component';

test('testing student component', () => {
  render(<Student fName="Batel" lName="Haiylo" age="25" isOnTown="true"/>);
  const headerElement = screen.getByText(/Batel Haiylo/i);
  expect(headerElement).toBeInTheDocument();
});
