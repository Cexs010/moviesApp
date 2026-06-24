import { ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useMovies } from '../../hooks/useMovies';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,
    popularNextPage,
  } = useMovies();
  const { top, bottom } = useSafeAreaInsets();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView
      style={[globalStyles.container, { paddingTop: top }]}
      contentContainerStyle={{ paddingBottom: bottom + 30 }}
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
