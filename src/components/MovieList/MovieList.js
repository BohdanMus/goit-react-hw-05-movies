import { Link } from 'react-router-dom';
import { Img, List } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <Img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </List>
  );
};
