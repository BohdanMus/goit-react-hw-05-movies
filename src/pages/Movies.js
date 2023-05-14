import { useEffect, useState } from 'react';
import { getMoviesByName } from 'api/api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFound, setIsFound] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? ''; // щоб не було помилки, якщо query не буде в URL
    if (!query) return;

    const getMovie = async () => {
      setIsLoader(true);
      try {
        const { results } = await getMoviesByName(query);
        if (results.total_results === 0) {
          setIsFound(false);
          setMovies([]);
        } else {
          setIsFound(true);
          setMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    getMovie();
  }, [searchParams]);
  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      {isLoader && <Loader />}
      {isFound ? (
        <MovieList movies={movies} state={{ from: location }} />
      ) : (
        <p>Sorry, we can't find any movie with that title</p>
      )}
    </section>
  );
};
export default Movies;
