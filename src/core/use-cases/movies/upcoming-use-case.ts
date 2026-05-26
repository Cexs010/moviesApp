import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MoviesDbResponse } from "../../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity"


export const upcomingMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<MoviesDbResponse>('/upcoming');
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        throw new Error('Error obtaining information from movies - upcoming')
    }
}