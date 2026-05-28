import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovieDBResponse } from "../../../infrastructure/interfaces/full-movie-db.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number
): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<FullMovieDBResponse>(`/${movieId}`);
        return MovieMapper.fromFullMovieDBResultToEntity(movie)
    } catch (error) {
        throw new Error(`Error obtaining information from movie - ${movieId}`)
    }
}