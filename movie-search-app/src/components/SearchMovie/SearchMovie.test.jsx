import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import SearchMovie from './SearchMovie';

describe('SearchMovie', () => {
  it('should do a fetch call after clicking of search button', async () => {
    render(<SearchMovie setMovies={() => {}} />);
    const fetchMock = vi.spyOn(global, 'fetch'); // Mockar fetch-funktionen

    const searchInputElem = screen.getByRole('textbox');
    fireEvent.keyUp(searchInputElem, {
      target: { value: 'Emma' },
    });
    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    // Kollar här att fetch-anropet har gjorts mot nedan url med filmtiteln som vi skrev in i inputfältet
    expect(fetchMock).toHaveBeenCalledWith(
      'http://www.omdbapi.com/?apikey=37fe945a&s=Emma'
    );
  });
});
