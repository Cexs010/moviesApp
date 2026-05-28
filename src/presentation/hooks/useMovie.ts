import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as UseCases from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movieDb.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>()

  const loadMovie = async () => {

    try {
      setIsLoading(true)

      const [fullMovie, cast] = await Promise.all([
        UseCases.getMovieByIdUseCase(movieDbFetcher, movieId),
        UseCases.getCastUseCase(movieDbFetcher, movieId)
      ])

      setMovie(fullMovie);
      setCast(cast)

    } catch (error) {
      throw new Error('Error obtaining the cast')
    } finally {
      setIsLoading(false)
    }



  }

  useEffect(() => {
    loadMovie()
  }, [movieId])

  return {
    isLoading,
    movie,
    cast
  }
};
