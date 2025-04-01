
"use client"
import { options } from "@/constants/api"
import { Movie } from "@/constants/types"
import { MovieCard } from "../_components/MovieCard"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Pagination } from "@/components/ui/pagination"

export default function Page(){
    const Params = useParams();
    const SearchParams = useSearchParams();
    const page = SearchParams.get('page');
    const [movies, setMovies] = useState<Movie[]>();

    //https://localhost:3000/popular?language=en-US&page=1

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch (
                `https://api.themoviedb.org/3/movie/${Params.category}?language=en-US&page=${page}`,
                options
            );
            const data = await response.json();
            setMovies(data.results.slice(0, 5));
        };
        fetchMovies();
    }, [page]);
    return (
        <div>
            <h1 className="font-bold">{Params.category}</h1>
            <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:gird-cols-5 lg:px-10">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination />
        </div>
    );
}