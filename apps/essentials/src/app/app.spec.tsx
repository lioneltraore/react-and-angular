import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  // should have a core concept section

  it('should have a title for core concept section', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Core concepts/gi)).toBeTruthy();
  });

  // should have 3 CoreConcept components in core concept section
});
