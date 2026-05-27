import { StyleSheet } from "react-native";

export const globalColors = {
    bg: '#e9e4e4'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: globalColors.bg
    },
    imageContainer: {
        width: 190,
        height: 300,
        borderRadius: 18,
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.30)',
    },
    image: {
        borderRadius: 18,
        width: '100%',
        height: '100%',
    },

})