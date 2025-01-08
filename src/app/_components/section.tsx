import { options } from "@/constants/api";
import { Movie, Props } from "@/constants/types";
import { MovieCard } from './MovieCard'
import Link from "next/link";

export const Section = async ({title, endpoint, moreLink}: Props) =>{
     const response = await fetch(
        `https://api.themoviedb.org/3/${endpoint}`,
        options
      );
    const resJson = await response.json();
    const movies: Movie[] = resJson.results.slice(0, 10);

    
      return(
        <div className="p-3 flex">
          <div>
            <h1 className="font-semibold -mt-5 mb-3 mr-4">{title}</h1>
           { moreLink &&  <Link href={moreLink} className="bg-black text-white p-2 rounded-sm text-bold shadow-md shadow-black">View All</Link>}
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:px-6 mt-3 text-black">
          {movies.map((movie)=>(
                <MovieCard movie={movie} />
            ))}
          </div>
          </div>
        </div>
  );
};