import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useMovies } from '../../hooks/useMovies';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

const HomeScreen = () => {
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <PosterCarousel movies={nowPlaying} />
      <HorizontalCarousel
        movies={popular}
        title="Populares"
        loadNextPage={popularNextPage}
      />
      <HorizontalCarousel movies={topRated} title="Mejor Calificadas" />
      <HorizontalCarousel movies={upComing} title="Próximamente" />
    </ScrollView>
  );
};

export default HomeScreen;
