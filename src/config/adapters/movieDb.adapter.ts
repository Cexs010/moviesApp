import { MOVIE_DB_API_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: MOVIE_DB_API_KEY,
        language: 'es'
    }
})