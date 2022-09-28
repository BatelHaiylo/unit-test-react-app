import { render, screen } from '@testing-library/react';
import Cat from "./Cat.component";

    it("testing cat component",()=>{
        render(<Cat/>);
        const paragraphElement = screen.getByText("Hello Cat");
        expect(paragraphElement).toBeInTheDocument();
      })