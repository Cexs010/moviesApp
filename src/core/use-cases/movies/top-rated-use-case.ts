import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MoviesDbResponse } from "../../../infrastructure/interfaces/movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const topRatedMovies = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<MoviesDbResponse>('/top_rated');
        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        throw new Error('Error obtaining information from movies - top rated')
    }
}