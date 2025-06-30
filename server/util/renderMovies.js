import axios from "axios";

const KEY = "e2f9ec00b3e2ab1eaed8bb8a0bc2e7b5"
// https://api.themoviedb.org/3/movie/popular?api_key=e2f9ec00b3e2ab1eaed8bb8a0bc2e7b5

const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`


const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY
  }
})

const getTopRated = async () => {
  const res = await tmdb.get('/movie/top_rated');
  console.log(res.data);
};

getTopRated();



const SearchWithGenreName = async() => {
  const response = await fetch(URL);
  const data = await response.json();
  data.genres.map(async (genre) => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genre.id}`);
    const data = await response.json();
    console.log(`${genre.name}`);
    data.results.map(async (movie) => {
      const genreName = movie.original_title
      console.log(genreName);
    })
  })
}

// SearchWithGenreName();

// `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genre.id}`


// https://image.tmdb.org/t/p/w500/g62G6aBcAcJv3ClCKmJgmHarHvq.jpg
// /g62G6aBcAcJv3ClCKmJgmHarHvq.jpg - backdrop path