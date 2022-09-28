import { render, screen } from '@testing-library/react';
import Game from './Game.component';

describe("test game component", ()=>{
    test("",()=>{
        render(<Game/>)
        const testElement= screen.getByText("bb")
        expect(testElement).toBeInTheDocument()
    })
})
