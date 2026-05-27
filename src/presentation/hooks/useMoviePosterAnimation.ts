import { useRef } from 'react';
import { Animated } from 'react-native';

export const useMoviePosterAnimation = () => {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const animatedStyle = { transform: [{ scale }], opacity };

    const onPressIn = () => {
        Animated.parallel([
            Animated.spring(scale, {
                toValue: 0.95,
                useNativeDriver: true,
                speed: 50,
                bounciness: 4,
            }),
            Animated.timing(opacity, {
                toValue: 0.85,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const onPressOut = () => {
        Animated.parallel([
            Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true,
                speed: 20,
                bounciness: 8,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return { animatedStyle, onPressIn, onPressOut };
};