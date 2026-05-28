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
        width: '100%',
        borderRadius: 15,
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
    },
    headerContainer: {
        width: '100%',
        backgroundColor: '#000',

        elevation: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
    },
    subTitle: {
        fontSize: 14,
        opacity: 0.65,
        marginBottom: 4,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '800',
        lineHeight: 38,
        color: '#111',
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },


    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 10,
        left: 10,
    },
    backButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },


})