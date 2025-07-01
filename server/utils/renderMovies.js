import axios from "axios";

const KEY = "e2f9ec00b3e2ab1eaed8bb8a0bc2e7b5"
// https://api.themoviedb.org/3/movie/popular?api_key=e2f9ec00b3e2ab1eaed8bb8a0bc2e7b5

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY
  }
})

const getTopRated = async () => {
  const res = await tmdb.get('/movie/top_rated');
  const movies = res.data.results;

  const urls = []

  for(let i = 0; i <= 10; i++) {
    const poster_path = movies[i].poster_path
    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    urls.push(imageUrl);
  }

  console.log(urls)
  
};

getTopRated();

// `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genre.id}`


// https://image.tmdb.org/t/p/w500/g62G6aBcAcJv3ClCKmJgmHarHvq.jpg
// /g62G6aBcAcJv3ClCKmJgmHarHvq.jpg - backdrop path