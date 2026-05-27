import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MoviesDbResponse } from "../../../infrastructure/interfaces/movie-db.response"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"
import { Movie } from "../../entities/movie.entity"

interface Options {
    page?: number;
    limit?: number

}

export const popularMoviesUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MoviesDbResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        })
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        throw new Error('Error obtaining information from movies - popular')
    }
}