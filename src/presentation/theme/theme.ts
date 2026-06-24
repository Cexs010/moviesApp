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
        top: 40,
        left: 14,

        zIndex: 999,
        elevation: 10,

        width: 44,
        height: 44,
        borderRadius: 22,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(0,0,0,0.45)',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },

    // ─── MovieHeader ──────────────────────────────────────────────
    movieImageContainer: {
        width: '100%',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 12,
        elevation: 12,
    },
    movieImageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    moviePosterImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    movieBackButton: {
        position: 'absolute',
        top: 14,
        left: 14,
        zIndex: 999,
    },
    movieBackPressable: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.38)',
        paddingVertical: 7,
        paddingHorizontal: 14,
        borderRadius: 50,
    },
    movieBackArrow: {
        color: 'white',
        fontSize: 18,
        lineHeight: 22,
    },
    movieBackButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 0.3,
    },
    movieTitleContainer: {
        marginHorizontal: 22,
        marginTop: 18,
        marginBottom: 4,
    },
    movieSubTitle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#888',
        letterSpacing: 1.2,
        textTransform: 'uppercase',
    },
    movieTitleDivider: {
        width: 32,
        height: 2.5,
        backgroundColor: '#c0b8b8',
        borderRadius: 4,
        marginVertical: 8,
    },
    movieHeaderTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        lineHeight: 30,
        letterSpacing: -0.3,
    },

    // ─── MovieDetails ─────────────────────────────────────────────
    detailsContainer: {
        marginHorizontal: 20,
    },
    detailsMetaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 4,
        flexWrap: 'wrap',
    },
    detailsRatingBadge: {
        backgroundColor: '#f5f0f0',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    detailsRatingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    detailsGenresText: {
        fontSize: 14,
        color: '#777',
        flexShrink: 1,
        letterSpacing: 0.2,
    },
    detailsDivider: {
        height: 1,
        backgroundColor: '#e0dada',
        marginVertical: 16,
        borderRadius: 2,
    },
    detailsSection: {
        gap: 6,
    },
    detailsSectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        letterSpacing: -0.2,
    },
    detailsBodyText: {
        fontSize: 15,
        color: '#444',
        lineHeight: 23,
    },
    detailsBudgetText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#222',
    },
    detailsEmptyText: {
        color: '#aaa',
        fontStyle: 'italic',
    },
    actorContainer: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },

})