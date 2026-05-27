import { StyleSheet } from "react-native";

export const globalColors = {
    bg: '#e9e4e4'
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: globalColors.bg,
    },
    imageContainer: {
        borderRadius: 18,
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.30)',
    },
    image: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 25,
        fontWeight: '300',
        marginLeft: 10,
        marginBottom: 10
    }

})