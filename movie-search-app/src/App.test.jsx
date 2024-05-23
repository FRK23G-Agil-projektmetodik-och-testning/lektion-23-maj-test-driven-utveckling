import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import App from './App';
import { beforeEach } from 'vitest';

describe('App', () => {
  beforeEach(() => {
    render(<App />);

    const searchInputElem = screen.getByRole('textbox');
    fireEvent.keyUp(searchInputElem, {
      target: { value: 'Emma' },
    });
    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);
  });

  it('should render a list of movies based of search query', async () => {
    await waitFor(() => {
      const movies = screen.getAllByRole('article');
    });

    const movieItems = screen.getAllByRole('article');
    expect(movieItems.length).toBeGreaterThan(0);
  });

  it('should render a error message if movie not found', async () => {
    const searchInputElem = screen.getByRole('textbox');
    fireEvent.keyUp(searchInputElem, {
      target: { value: 'dwdwasdwadw' },
    });
    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    await waitFor(() => {
      const headingElem = screen.getByRole('heading');
      expect(headingElem.textContent).toBe('Inga filmer hittades!');
    });
  });

  it('should not display any images if selecting filter out images', async () => {
    const checkboxImageElem = screen.getByLabelText('Visa bilder');
    fireEvent.click(checkboxImageElem);

    await waitFor(() => {
      const images = screen.queryAllByAltText('poster');
      expect(images.length).toBe(0);
    });
  });

  it('should display images again after selecting to filter out images', async () => {
    const checkboxImageElem = screen.getByLabelText('Visa bilder');
    fireEvent.click(checkboxImageElem);
    fireEvent.click(checkboxImageElem);

    await waitFor(() => {
      const images = screen.queryAllByAltText('poster');
      expect(images.length).toBeGreaterThan(0);
    });
  });

  it('should not display any years if selecting filter out years', async () => {
    const checkboxImageElem = screen.getByLabelText('Visa utgivningsår');
    fireEvent.click(checkboxImageElem);

    await waitFor(() => {
      const images = screen.queryAllByTestId('year');
      expect(images.length).toBe(0);
    });
  });

  it('should display years again after selecting to filter out years', async () => {
    const checkboxImageElem = screen.getByLabelText('Visa utgivningsår');
    fireEvent.click(checkboxImageElem);
    fireEvent.click(checkboxImageElem);

    await waitFor(() => {
      const images = screen.queryAllByTestId('year');
      expect(images.length).toBeGreaterThan(0);
    });
  });
});
