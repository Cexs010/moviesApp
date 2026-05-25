import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2995e8cab62b3b44ab6e79e2c710623f',
        language: 'es'
    }
})