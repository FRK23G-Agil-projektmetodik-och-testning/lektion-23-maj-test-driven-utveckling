import { http, HttpResponse } from 'msw';

const SUCCESS_RESULT = {
  Search: [
    {
      Title: 'Emma.',
      Year: '2020',
      imdbID: 'tt9214832',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    },
    {
      Title: 'Emma',
      Year: '1996',
      imdbID: 'tt0116191',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2E1YTUzZDAtODQ2YS00MWNjLWEzMzAtZjgwY2M3ZTcwOTJhXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg',
    },
  ],
  totalResults: '328',
  Response: 'True',
};

const ERROR_RESULT = { Response: 'False', Error: 'Movie not found!' };

export const handlers = [
  http.get('http://www.omdbapi.com/', ({ request }) => {
    const urlParams = new URL(request.url).searchParams;
    const query = urlParams.get('s');

    if (query === 'Emma') return HttpResponse.json(SUCCESS_RESULT);

    return HttpResponse.json(ERROR_RESULT);
  }),
];
