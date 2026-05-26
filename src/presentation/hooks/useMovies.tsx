import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDb.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [
      nowPlayingPromise,
      upcomingPromise,
      popularPromise,
      topRatedPromise,
    ] = await Promise.all([
      UseCases.nowPlayingmoviesUseCase(movieDbFetcher),
      UseCases.upcomingMoviesUseCase(movieDbFetcher),
      UseCases.popularMoviesUseCase(movieDbFetcher),
      UseCases.topRatedMoviesUseCase(movieDbFetcher),
    ]);

    setNowPlaying(nowPlayingPromise);
    setUpComing(upcomingPromise);
    setPopular(popularPromise);
    setTopRated(topRatedPromise);
  };

  return {
    isLoading,
    nowPlaying,
    upComing,
    popular,
    topRated,
  };
};
