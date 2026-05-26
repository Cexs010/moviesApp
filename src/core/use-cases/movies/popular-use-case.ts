import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MoviesDbResponse } from "../../../infrastructure/interfaces/movie-db.response"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"
import { Movie } from "../../entities/movie.entity"

export const popularMoviesUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MoviesDbResponse>('/popular')
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        throw new Error('Error obtaining information from movies - popular')
    }
}