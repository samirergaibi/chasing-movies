require("dotenv").config();

const API = {
  API_KEY: process.env.REACT_APP_API_KEY,
  URL: "https://api.themoviedb.org/3/",
  IMG_URL: "https://image.tmdb.org/t/p"
};

// Not used anymore --DELETE--
export const getFrontPageMovies = (
  after = `${new Date().getFullYear() - 9}-01-01`,
  before = `${new Date().getFullYear() - 1}-01-01`
) => {
  const randomPage = Math.ceil(Math.random() * 44);
  return fetch(
    `${API.URL}discover/movie?api_key=${API.API_KEY}&include_adult=false&include_video=false&page=${randomPage}&primary_release_date.gte=${after}&primary_release_date.lte=${before}&vote_count.gte=1000`
  )
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => console.error(err))
};

export const getRandomMovies = () => {
  const randomPage = Math.ceil(Math.random() * 100);
  return fetch(
    `${API.URL}discover/movie?api_key=${API.API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&vote_count.gte=10`
  )
    .then(resp => resp.json())
    .then(resp => resp);
};

export const getMovie = (id) => {
  return fetch(`${API.URL}movie/${id}?api_key=${API.API_KEY}&append_to_response=credits,videos`)
    .then(resp => resp.json())
    .then(resp => resp)
}

export const getGenres = () => {
  return fetch(`${API.URL}genre/movie/list?api_key=${API.API_KEY}&language=en-US`)
    .then(resp => resp.json())
    .then(resp => resp)
}

export const getFilteredMovies = (genre) => {
  const randomPage = fetch(`${API.URL}discover/movie?api_key=${API.API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genre}&vote_count.gte=100`)
    .then(resp => resp.json())
    .then(resp => {
      if(resp.total_pages){
        return Math.ceil(Math.random() * resp.total_pages);
      } else {
        return 1;
      }
    })
  return randomPage.then(randomNumber => {
    return fetch(`${API.URL}discover/movie?api_key=${API.API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomNumber}&with_genres=${genre}&vote_count.gte=100`)
      .then(resp => resp.json())
      .then(resp => resp);
  });
}