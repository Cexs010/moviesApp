import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useMovies } from '../../hooks/useMovies';
import { PosterCarousel } from '../../components/movies/PosterCarousel';

const HomeScreen = () => {
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return <Text>Cargando contenido ...</Text>;
  }

  return (
    <View style={globalStyles.container}>
      <PosterCarousel movies={nowPlaying} />
    </View>
  );
};

export default HomeScreen;
