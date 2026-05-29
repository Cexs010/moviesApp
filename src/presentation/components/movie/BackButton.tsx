import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IonIcon } from '../shared/Ionicon';
import { globalStyles } from '../../theme/theme';

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={({ pressed }) => [
        globalStyles.backButton,
        pressed && { opacity: 0.7, transform: [{ scale: 0.96 }] },
      ]}
    >
      <IonIcon name="arrow-back" color="white" size={24} />
    </Pressable>
  );
};
