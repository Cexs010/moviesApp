import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Formatter } from '../../../config/helpers/formatter';
import { globalStyles } from '../../theme/theme';
import { Cast } from '../../../core/entities/cast.entity';
import { ActorCard } from '../cast/ActorCard';

interface Props {
  movie: {
    rating: number;
    genres: string[];
    description: string;
    budget: number;
  };
  cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsMetaRow}>
        <View style={globalStyles.detailsRatingBadge}>
          <Text style={globalStyles.detailsRatingText}>
            ⭐ {movie.rating.toFixed(1)}
          </Text>
        </View>
        <Text style={globalStyles.detailsGenresText} numberOfLines={2}>
          {movie.genres.join(' · ')}
        </Text>
      </View>

      <View style={globalStyles.detailsDivider} />

      <View style={globalStyles.detailsSection}>
        <Text style={globalStyles.detailsSectionTitle}>Historia</Text>
        <Text style={globalStyles.detailsBodyText}>{movie.description}</Text>
      </View>

      <View style={globalStyles.detailsDivider} />

      <View style={globalStyles.detailsSection}>
        <Text style={globalStyles.detailsSectionTitle}>Presupuesto</Text>
        <Text
          style={[
            globalStyles.detailsBudgetText,
            !movie.budget && globalStyles.detailsEmptyText,
          ]}
        >
          {Formatter.currency(movie.budget)}
        </Text>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={globalStyles.detailsSectionTitle}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ActorCard actor={item} />}
        />
      </View>
    </View>
  );
};
