export class MovieData {
    /*page:number;
    results:[
        poster_path:string;
        adult:boolean;
        overview:string;
        release_date:string;
        genre_ids:[];
        genres:[
            id:number,
            name:string
        ];
        id:number;
        original_title:string;
        original_language:string;
        title:string;
        backdrop_path:string;
        popularity:number;
        vote_count:number;
        video:boolean;
        vote_average:number;
    ];
    total_results:number;
    total_pages:number;*/

    adult: string;
    backdrop_path: string;
    belongs_to_collection: {
        id: number, 
        name: string, 
        poster_path: string, 
        backdrop_path: string
    }
    budget: number;
    genres: [
        {id:number, name:string}
    ]
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number
    poster_path: string;
    //production_companies: (3) [{…}, {…}, {…}]
    production_countries: [
        {iso_3166_1: string, name: string}
    ]
    release_date: string;
    revenue: number;
    runtime: string;
    //spoken_languages: (2) [{…}, {…}]
    status: string;
    tagline: string;
    title: string
    video: string;
    vote_average: number;
    vote_count: number;

}
