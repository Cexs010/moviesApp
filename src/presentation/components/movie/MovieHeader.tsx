import React from 'react';
import {
  useWindowDimensions,
  View,
  Image,
  Text,
  Pressable,
} from 'react-native';
import { globalStyles } from '../../theme/theme';
import { BackButton } from './BackButton';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

export const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          ...globalStyles.headerContainer,
          height: screenHeight * 0.7,
        }}
      >
        <View style={globalStyles.imageBorder}>
          <Image style={globalStyles.posterImage} source={{ uri: poster }} />
        </View>
      </View>

      <View style={globalStyles.marginContainer}>
        <Text style={globalStyles.subTitle}>{originalTitle}</Text>
        <Text style={globalStyles.headerTitle}>{title}</Text>
      </View>

      <BackButton />
    </>
  );
};
