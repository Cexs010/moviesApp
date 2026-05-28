import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../../../core/entities/cast.entity';
import { globalStyles } from '../../theme/theme';

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View style={globalStyles.actorContainer}>
      <Image
        source={{ uri: actor.avatar }}
        style={{
          width: 100,
          height: 150,
          borderRadius: 10,
        }}
      />
      <View style={globalStyles.actorInfo}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 12, opacity: 0.12 }}>{actor.character}</Text>
      </View>
    </View>
  );
};
