import { render } from "@testing-library/react";
import Header from "./Header";

describe('Header', ()=> {
  it('should render successfully', ()=> {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  // should include an image

  // should have a title

  // should have an item from reactDescriptions array in the paragraph
})
