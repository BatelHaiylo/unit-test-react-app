import { render, screen } from '@testing-library/react';
import Table from './Table.component';

test('testing table component', () => {
  render(<Table/>);
  const spanElement = screen.getByText("This is my table");
  expect(spanElement).toBeInTheDocument();
});
