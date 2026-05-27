import { ScrollView, View, Text } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[];
}

export const PosterCarousel = ({ movies }: Props) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
