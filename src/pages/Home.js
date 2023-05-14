import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      {isLoader && <Loader />}
      <MovieList movies={trendingMovies} />
    </section>
  );
};

export default Home;
