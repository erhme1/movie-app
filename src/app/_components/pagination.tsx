'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Pagination = ({}) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    //https://localhost:3000/popular?language=en-US&page=2

    const onChangePage = (newPage: number) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', newPage.toString());
        const newUrl = pathName + '?' + newSearchParams.toString();
        router.push(newUrl);
        <div>
             <img 
            //   src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded-tr-lg rounded-tl-lg" 
              />
        </div>
    };
    return (
        <div className="flex gap-10 ml-6">
            <div onClick={() => onChangePage(1)}>1</div>
            <div onClick={() => onChangePage(2)}>2</div>
            <div onClick={() => onChangePage(3)}>3</div>
        </div>
    )
};