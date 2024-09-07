import { render } from '@testing-library/react';
import CoreConcept from './CoreConcept';
import { Concept } from '../../types/concept';
import reactImg from '../../assets/components.png';

describe('CoreConcept', () => {
  const concept: Concept = {
    title: 'Test concept title',
    description: 'Test concept description',
    image: reactImg
  };


  it('should render with the correct description', ()=> {
    const { getByText } = render(<CoreConcept {...concept} />);
    const description = getByText(concept.description);
    expect(description).toBeTruthy();
  });

  it('should render with the correct title', () => {
    const { getByText } = render(<CoreConcept {...concept} />);
    const title = getByText(concept.title);
    expect(title).toBeTruthy();
  });

  it('should render with the correct image', ()=> {
    const { getByAltText } = render(<CoreConcept {...concept} />);
    const image = getByAltText(concept.title);
    expect(image).toBeTruthy();
  })
});
