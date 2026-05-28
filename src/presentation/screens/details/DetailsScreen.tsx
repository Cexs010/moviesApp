import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends NativeStackScreenProps<RootStackParams, 'details'> {}

const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);

  if (isLoading) {
    return (
      <View>
        <Text> Loading ...</Text>
      </View>
    );
  }

  return (
    <View>
      <MovieHeader
        poster={movie?.poster!}
        originalTitle={movie?.originalTitle!}
        title={movie?.title!}
      />
    </View>
  );
};

export default DetailsScreen;
