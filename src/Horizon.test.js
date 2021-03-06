import { render, screen } from '@testing-library/react';
import Horizon from './Horizon';


test('renders horizon h2 tag', () => {
  render(<Horizon />);
  const linkElement = screen.getByText(/Horizon 2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders word hello', () => {
  render(<Horizon />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});