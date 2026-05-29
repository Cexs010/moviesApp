import Config from 'react-native-config';
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: Config.MOVIE_DB_API_KEY,
        language: 'es'
    }
})