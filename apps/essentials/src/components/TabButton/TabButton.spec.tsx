import { render } from "@testing-library/react";
import TabButton from "./TabButton";

describe('TabButton', ()=> {
  it('should render with the correct label', ()=> {
    const label = 'Test label';
    const { getByText } = render(<TabButton children={label} />);
    const button = getByText(label);
    expect(button).toBeTruthy();
  });
})
