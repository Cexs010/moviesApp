import { Cast } from "../../core/entities/cast.entity";
import { MovieDBCast } from "../interfaces/cast.response";

export class CastMapper {
    static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {

        return {
            id: actor.id,
            name: actor.name,
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            character: actor.character ?? 'No character'
        }
    }
}