function MovieCard(props) {
  const { movie, showImage, showYear } = props;

  return (
    <article>
      {showImage ? <img src={movie.Poster} alt='poster' /> : ''}
      <h2>{movie.Title}</h2>
      {showYear ? <h3 data-testid='year'>{movie.Year}</h3> : ''}
    </article>
  );
}

export default MovieCard;
