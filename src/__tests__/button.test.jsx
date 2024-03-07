import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from 'src/components/common/Button';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
