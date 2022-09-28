import { render, screen } from '@testing-library/react';
import Student from './Student.component';

describe("testing student component",()=>{
  test('render to screen', () => {
    render(<Student fName="Batel" lName="Haiylo" age="25" isOnTown="true"/>);
    const headerElement = screen.getByText("Haiylo");
    expect(headerElement).toBeInTheDocument();
  });
  test('render to screen', async() => {
    render(<Student fName="Batel" lName="Haiylo" age="25" isOnTown="true"/>);
    const headerElement = await screen.findByTestId("age-header");
    expect(headerElement).toHaveTextContent("25");
  });
  test('render to screen', async() => {
    render(<Student fName="Batel" lName="Haiylo" age="25" isOnTown="true"/>);
    const headerElement = await screen.findByTestId("fName-header");
    expect(headerElement).toHaveTextContent("Batel");
  });
})