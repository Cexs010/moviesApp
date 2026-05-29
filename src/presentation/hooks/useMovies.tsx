import { useCallback, useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDb.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  const initialLoad = async () => {
    try {
      setIsLoading(true);

      const [nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies] =
        await Promise.all([
          UseCases.nowPlayingmoviesUseCase(movieDbFetcher),
          UseCases.upcomingMoviesUseCase(movieDbFetcher),
          UseCases.popularMoviesUseCase(movieDbFetcher),
          UseCases.topRatedMoviesUseCase(movieDbFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setUpComing(upcomingMovies);
      setPopular(popularMovies);
      setTopRated(topRatedMovies);
    } catch (error) {
      throw new Error('Error obtaining movies');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  const popularNextPage = useCallback(async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.popularMoviesUseCase(movieDbFetcher, {
      page: popularPageNumber,
    });
    setPopular(prev => [...prev, ...popularMovies]);
  }, []);

  return {
    isLoading,
    nowPlaying,
    upComing,
    popular,
    topRated,
    popularNextPage,
  };
};
