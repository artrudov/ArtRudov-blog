import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>

test("Displays the correct title", () => {
    const { getByTestId } = render(<Title />)
    // Assertion
    expect(getByTestId("hero-title")).toHaveTextContent("Gatsby awesome!")
    // --> Test will pass
})

import Header from "../Header"

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Header />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
