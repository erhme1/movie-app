"use client"


import { Badge } from "@/components/ui/badge";
import { options } from "@/constants/api";
import { Movie, MovieDetail } from "@/constants/types";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [movieDetail, setMovieDetail] = useState<MovieDetail>()
    const { id } = useParams();
    
    
    useEffect(() => {
        const fetchMovieDetail= async () => {
            const response = await fetch (
                `https://api.themoviedb.org/3/movie/${id}`,
                options
            );
            const data = await response.json();
            console.log(data)
            setMovieDetail(data);
        };
        fetchMovieDetail();
    }, [id]);



    return (
    <div>
        <h1 className="font-bold p-2 text-2xl">{movieDetail?.title}</h1>
        <div className="ml-2.5 -mt-2 mb-2 flex">
            {movieDetail?.release_date}
        </div>
        <img 
              src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
              className="rounded-xl ml-0.5"
        />
        <div className="flex">
        <img className="rounded-3xl p-4 h-[200px] w-[200px]" src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} />
        <div className="p-2 gap-2">{ movieDetail?.genres.map(el=> <Badge> {el.name}</Badge>)}
            <div className="mt-4">
                {movieDetail?.overview}
            </div>
        </div>
        </div> 
    </div>
    )
}