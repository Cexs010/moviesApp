// components/MoviePoster.tsx
import { Animated, Image, Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Movie } from '../../../core/entities/movie.entity';
import { globalStyles } from '../../theme/theme';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useMoviePosterAnimation } from '../../hooks/useMoviePosterAnimation';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const MoviePoster = ({ movie, width = 190, height = 300 }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const { animatedStyle, onPressIn, onPressOut } = useMoviePosterAnimation();

  return (
    <Pressable
      onPress={() => navigation.navigate('details', { movieId: movie.id })}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{ paddingHorizontal: 7, paddingVertical: 7 }}
    >
      <Animated.View
        style={[
          globalStyles.imageContainer,
          animatedStyle,
          { width: width, height: height },
        ]}
      >
        <Image style={globalStyles.image} source={{ uri: movie.poster }} />
      </Animated.View>
    </Pressable>
  );
};
