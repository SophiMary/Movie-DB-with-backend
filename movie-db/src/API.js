
const API_KEY = "516d4a1c353b69755fa9180a0ee73f2f";
const url = "https://api.themoviedb.org/3";
const FeaturedMovies = `${url}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const FeaturedTVShows = `${url}/discover/tv?sort_by=popularity.desc&api_key=${API_KEY}`;
const Images= "https://image.tmdb.org/t/p/w1280";
const SearchMovies = `${url}/search/movie?&api_key=${API_KEY}&query=`
const SearchTVShows = `${url}/search/tv?&api_key=${API_KEY}&query=`

export { FeaturedMovies, Images, FeaturedTVShows, SearchMovies, SearchTVShows }