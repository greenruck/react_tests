import { render, fireEvent } from "@testing-library/react";
import { it } from "node:test";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', () => {
  render(<Card />)
})

it('matches snapshot', () => {
    const {asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
  })