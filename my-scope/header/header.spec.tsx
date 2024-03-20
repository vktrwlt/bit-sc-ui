import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Hello World!');

  expect(rendered).toBeTruthy();
});

it('matches snapshot', () => {
  const {container} =  render(<BasicHeader />);
  

  expect(container).toMatchSnapshot();
});
