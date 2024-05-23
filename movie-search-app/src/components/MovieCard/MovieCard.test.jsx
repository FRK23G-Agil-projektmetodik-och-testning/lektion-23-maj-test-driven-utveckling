import { render, screen } from '@testing-library/react';

import MovieCard from './MovieCard';

describe('MovieCard', () => {
  it('should render a movie will the expected information', async () => {
    const movie = {
      Title: 'Emma.',
      Year: '2020',
      imdbID: 'tt9214832',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    };

    render(<MovieCard movie={movie} showImage={true} showYear={true} />);

    const titleElem = screen.getByText('Emma.');
    const yearElem = screen.getByText('2020');
    const imgElem = screen.getByAltText('poster');
    expect(titleElem.textContent).toBe('Emma.');
    expect(yearElem.textContent).toBe('2020');
    expect(imgElem.src).toBe(
      'https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg'
    );
  });

  it('should not show images if filtered out', async () => {
    const movie = {
      Title: 'Emma.',
      Year: '2020',
      imdbID: 'tt9214832',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    };

    render(<MovieCard movie={movie} showImage={false} showYear={true} />);

    const imgElem = screen.queryByAltText('poster');
    expect(imgElem).not.toBeInTheDocument();
  });

  it('should not show year if filtered out', async () => {
    const movie = {
      Title: 'Emma.',
      Year: '2020',
      imdbID: 'tt9214832',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    };

    render(<MovieCard movie={movie} showImage={true} showYear={false} />);

    const yearElem = screen.queryByTestId('year');
    expect(yearElem).not.toBeInTheDocument();
  });
});
