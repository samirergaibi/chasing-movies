## Movie Chasing

Have you, as I have, had the problem of not knowing what to watch?
This project tries to solve that problem. Through an API-connection to TMD(The movie database API)
this page lists random movies that you might want to watch. You also have the ability to randomly get
movies by genre.

## How to use
This website is powered by [TMDb](https://www.themoviedb.org/). This means that you will have to
have an API key from their site if you clone this repository and try to start it.
* Get an API key from their site
* Create a .env file in the root directory and add the following in said file:
* REACT_APP_API_KEY=your-api-key
* replace "your-api-key" with your api key

### Coming features
- Get random movies by genre
- Filter by release and other useful options
- Mark movies as saved in a watchlist(localstorage)