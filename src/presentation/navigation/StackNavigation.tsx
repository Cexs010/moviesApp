import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';

export type RootStackParams = {
  home: undefined;
  details: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, marginTop: top, marginBottom: bottom }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
          animation:
            Platform.OS === 'android' ? 'slide_from_bottom' : 'default',
        }}
      >
        <Stack.Screen
          name="home"
          options={{ title: 'Inicio' }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="details"
          options={{ title: 'Detalles' }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </View>
  );
};
