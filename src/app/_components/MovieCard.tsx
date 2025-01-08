import { Movie } from "@/constants/types";
import { StarIcon } from "lucide-react";
import Link from "next/link";
export const MovieCard = ({ movie }: {movie: Movie}) => {

    return (
      <Link href={`movie/${movie.id}`}>
        <div className="rounded-lg bg-gray-100">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-tr-lg rounded-tl-lg" 
              />
        <div className="p-3">
        <div className="flex items-center">
          <StarIcon size={16} className="stroke-yellow-300 fill-yellow-300" />
          <span className="after: content-['/10'] after:text-muted-foreground">{movie.vote_average.toFixed(1)}</span>
        </div>
        <p>{movie.title}</p>
        </div>
        </div>  </Link>
    )
}