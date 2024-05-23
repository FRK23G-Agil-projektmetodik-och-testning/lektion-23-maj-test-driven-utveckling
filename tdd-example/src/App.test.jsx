import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should increase counter after clicking increase', () => {
    render(<App />);

    const increaseButton = screen.getByRole('button');
    fireEvent.click(increaseButton);

    const counterElem = screen.getByTestId('amount');
    expect(counterElem.textContent).toBe('1');
  });
});
