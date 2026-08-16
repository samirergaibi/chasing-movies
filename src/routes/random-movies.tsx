import { createFileRoute } from '@tanstack/react-router';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CalendarDays, Clock, Drama } from 'lucide-react';

import type { Movie } from '@/types';
import { getRuntime } from '@/utils/get-runtime';

function getRandomPage(exclusion: number[]): number | null {
  const MAX = 100;
  if (exclusion.length >= MAX) {
    return null;
  }
  let randomPage = Math.ceil(Math.random() * MAX);
  while (exclusion.includes(randomPage)) {
    randomPage = Math.ceil(Math.random() * MAX);
  }
  return randomPage;
}

async function fetchMovies(pageParam: number): Promise<Movie[]> {
  try {
    const randomMoviesResp = await fetch(
      `http://localhost:3011/tmdb/discover/movie?page=${pageParam}`,
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
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    return [];
  }
}

export const Route = createFileRoute('/random-movies')({
  component: RandomMovies,
});

function RandomMovies() {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['random', 'movies'],
      staleTime: Infinity,
      initialPageParam: getRandomPage([]) as number,
      queryFn: ({ pageParam }) => fetchMovies(pageParam),
      getNextPageParam: (
        _lastPage,
        _allPages,
        _lastPageParam,
        allPageParams,
      ) => {
        return getRandomPage(allPageParams);
      },
    });

  const movies = data?.pages.flat() ?? [];

  return (
    <div className="my-40 max-w-[1050px] mx-auto text-center">
      <h1 className="text-4xl underline font-semibold my-6">Random movies</h1>
      <div className="bg-yellow-200 px-6 py-4 inline-block shadow mx-2 mb-8">
        <p className="italic">
          Reloading this page will result in twenty new randomly selected
          movies.
        </p>
      </div>
      {isLoading ? (
        <div className="w-18 h-18 border-6 border-sky-300 border-t-transparent rounded-full animate-spin mx-auto" />
      ) : (
        <>
          {movies.map((movie, index) => (
            <div key={movie.id} className="my-4">
              {index !== 0 && (
                <hr className="my-20 mx-10 md:mx-auto max-w-[800px]" />
              )}
              <a href={`/movies/${movie.id}`}>
                <h2 className="inline-block font-semibold text-2xl mb-8">
                  {movie.title}
                </h2>
              </a>
              <div className="max-w-[580px] mx-auto grid grid-cols-2 items-center md:gap-30">
                <div>
                  <a href={`/movies/${movie.id}`} className="inline-block">
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt={`Poster for ${movie.title}`}
                      className="justify-self-end"
                    />
                  </a>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col items-center">
                    <CalendarDays />
                    <span>
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : 'Unknown'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Drama />
                    <div>
                      {movie.genres.map((genre) => (
                        <div key={genre.id}>{genre.name}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock />
                    <span>{getRuntime(movie.runtime)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {movies.length > 0 && hasNextPage && (
            <button
              disabled={isFetchingNextPage}
              className="bg-(--tertiary-bg-color) font-semibold px-6 py-3 rounded-xl mt-20 cursor-pointer transition-all duration-200 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
              onClick={() => fetchNextPage()}
            >
              Load more
            </button>
          )}
        </>
      )}
    </div>
  );
}
