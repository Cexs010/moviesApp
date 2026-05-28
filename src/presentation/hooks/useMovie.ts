import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDb.adapter';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>()

  const loadMovie = async () => {
    setIsLoading(true)
    const fullMovie = await UseCases.getMovieByIdUseCase(movieDbFetcher, movieId);
    setMovie(fullMovie);
    setIsLoading(false)
  }

  useEffect(() => {
    loadMovie()
  }, [movieId])

  return {
    isLoading,
    movie
  }
};
