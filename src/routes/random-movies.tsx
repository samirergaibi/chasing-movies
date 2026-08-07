import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { CalendarDays, Clock, Drama } from 'lucide-react';

import type { Movie } from '@/types';
import { getRuntime } from '@/utils/get-runtime';

export const Route = createFileRoute('/random-movies')({
  component: RandomMovies,
});

function RandomMovies() {
  const { data: movies } = useQuery<Movie[]>({
    initialData: [],
    queryKey: ['random-movies'],
    queryFn: async () => {
      const randomPage = Math.ceil(Math.random() * 100);
      const randomMoviesResp = await fetch(
        `http://localhost:3011/tmdb/discover/movie?page=${randomPage}`,
      );
      const randomMovies = (await randomMoviesResp.json())?.results ?? [];

      const moviesData = await Promise.all([
        ...randomMovies.map(async (movie: Movie) => {
          const resp = await fetch(
            `http://localhost:3011/tmdb/movie/${movie.id}`,
          );
          return await resp.json();
        }),
      ]);
      return moviesData;
    },
  });

  return (
    <div className="my-50 text-center">
      <h1 className="text-4xl underline font-bold my-6">Random movies</h1>
      <div className="bg-yellow-200 px-6 py-4 inline-block shadow mx-2 mb-8">
        <p className="italic">
          Reloading this page will result in twenty new randomly selected
          movies.
        </p>
      </div>
      {movies.map((movie) => (
        <div key={movie.id} className="my-4">
          <h2 className="font-bold text-2xl mb-8">{movie.title}</h2>
          <div className="grid grid-cols-2 items-center gap-30">
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={`Poster for ${movie.title}`}
              className="justify-self-end"
            />
            <div className="justify-self-start flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <CalendarDays />
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
              <div className="flex flex-col items-center">
                <Drama />
                <div>
                  {movie.genres.map((genre) => (
                    <div>{genre.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Clock />
                <span>{getRuntime(movie.runtime)}</span>
              </div>
            </div>
          </div>
          <hr className="my-20 mx-50" />
        </div>
      ))}
    </div>
  );
}
