export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    genre_ids: number[];
    overview: string;
};
export type Props = {
    title: string;
    endpoint: string;
    moreLink?: string
};

export type Genre = {
    id: number;
    name:string
}
export type MovieDetail = {
    id: number;
    title: string;
    poster_path: number;
    vote_average: string;
    genres: Genre[];
    overview: string;
    release_date: string;
    adult: boolean;
    backdrop_path:string
};