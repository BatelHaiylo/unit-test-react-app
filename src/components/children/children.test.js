import { render, screen } from '@testing-library/react';
import Children from "./Children.component"


describe("test Children component", ()=>{
    test("check is in section tag",()=>{
        render(<Children/>)
        const sectionElement= screen.getByText("Hello children")
        expect(sectionElement).toBeInTheDocument()
    })
    test("check text in a specific span",async()=>{
        render(<Children/>)
        const spanElement = await screen.findByTestId("span-Children")
        expect(spanElement).toHaveTextContent("Hello children")
    })
    test("check by role",()=>{
        render(<Children/>)
        const testElement = screen.getByRole("container")
        expect(testElement).toBeInTheDocument()
    })
    test("check by class name", ()=>{
        const TextElement = screen.getByText("Hello children")
        expect(TextElement).toHaveClass("spanText")
    })
    test("check text color", ()=>{
        const TextElement = screen.getByText("Hello children")
        expect(TextElement.style.color).toBe("red")
    })
    test("check text color", ()=>{
        const TextElement = screen.getByText("Hello children")
        expect(TextElement).toHaveStyle({color: 'red'})
    })
    test("check by class name",()=>{
        render(<Children/>)
        const testElement = screen.getByText("Hello children")
        expect(testElement.length).toBe(14)
    })
    // test("check lang", ()=>{
    //     render(<Children/>)
    //     const TextElement = screen.getByText("Hello children")
    //     expect(TextElement).
    // })
})