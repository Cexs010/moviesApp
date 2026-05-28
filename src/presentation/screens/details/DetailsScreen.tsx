import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends NativeStackScreenProps<RootStackParams, 'details'> {}

const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!movie) return null;
  if (!cast) return null;

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
      <MovieHeader
        poster={movie.poster}
        originalTitle={movie.originalTitle}
        title={movie.title}
      />
      <MovieDetails movie={movie} cast={cast} />
    </ScrollView>
  );
};

export default DetailsScreen;
