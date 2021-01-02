import { render, screen } from '@testing-library/react';
import Horizon from './Horizon';


test('renders horizon h2 tag', () => {
  render(<Horizon />);
  const linkElement = screen.getByText(/Horizon/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders horizon h2 tag', () => {
  render(<Horizon />);
  const linkElement = screen.getByText(/Horizon 3/i);
  expect(linkElement).toBeInTheDocument();
});