import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AlertCircle, CalendarDays, Clock, Drama, Info } from 'lucide-react';

import type { Genre, Movie } from '@/types';
import { getRuntime } from '@/utils/get-runtime';
import { useDebounce } from '@/hooks/useDebounce';

// TODO:
// sync the genres to query params or session/local storage so they're not lost between switching routes

function getRandomPage(exclusion: number[]): number | null {
  // TODO: To improve the algorithm we should make sure that it selected a lower bound number first
  // e.g. if the array contains less than 10 values, pick a random number between 1 - 10
  // if above 10 but lower than 20 select between 20 -30
  // etc. etc.
  // this would still provide the feeling of "randomness" but also provide the most popular movies first.
  const MAX = 50;
  if (exclusion.length >= MAX) {
    return null;
  }
  let randomPage = Math.ceil(Math.random() * MAX);
  while (exclusion.includes(randomPage)) {
    randomPage = Math.ceil(Math.random() * MAX);
  }
  return randomPage;
}

async function fetchMovies(
  pageParam: number,
  genres: number[] = [],
): Promise<Movie[]> {
  try {
    const randomMoviesResp = await fetch(
      `http://localhost:3011/tmdb/discover/movie?page=${pageParam}&with_genres=${genres.join('|')}`,
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

export const Route = createFileRoute('/movies')({
  component: RandomMovies,
  loader: async () => {
    const resp = await fetch('http://localhost:3011/tmdb/genre/movie/list');
    return await resp.json();
  },
});

function RandomMovies() {
  const { genres }: { genres: Genre[] } = Route.useLoaderData();
  const [selectedGenres, setSelectedGenres] = useState(
    genres.map((genre) => genre.id),
  );
  const debouncedGenres = useDebounce(selectedGenres, 300);
  const [userError, setUserError] = useState<string | null>(null);
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['movies', debouncedGenres.toSorted((a, b) => a - b)],
      staleTime: Infinity,
      initialPageParam: getRandomPage([]) as number,
      queryFn: ({ pageParam }) => fetchMovies(pageParam, debouncedGenres),
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
      <div className="bg-[#2b90af] text-white inline-flex items-center gap-2 px-6 py-4 shadow mx-2 mb-8">
        <Info size={20} />
        <span className="italic">
          Select one or more genres to customize your view.
        </span>
      </div>
      <fieldset className="mb-8">
        <legend className="sr-only">Genres</legend>
        <div className="flex flex-wrap gap-4 justify-center">
          {genres.map((genre) => {
            const isSelected = selectedGenres.includes(genre.id);
            return (
              <div key={genre.id}>
                <label
                  htmlFor={genre.id.toString()}
                  className={`border py-1 px-2 rounded cursor-pointer${isSelected ? ' bg-(--tertiary-bg-color) text-gray-800 font-semibold' : ' opacity-50'}`}
                >
                  {genre.name}
                </label>
                <input
                  className="hidden cursor-pointer"
                  type="checkbox"
                  name="genres"
                  id={genre.id.toString()}
                  value={genre.id}
                  checked={isSelected}
                  onChange={() => {
                    if (isSelected && selectedGenres.length === 1) {
                      setUserError('At least one genre needs to be selected');
                      return null;
                    }
                    setUserError(null);
                    if (isSelected) {
                      setSelectedGenres(
                        selectedGenres.filter((id) => id !== genre.id),
                      );
                    } else {
                      setSelectedGenres([...selectedGenres, genre.id]);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </fieldset>
      {!!userError && (
        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm font-medium">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span>{userError}</span>
        </div>
      )}
      {isLoading ? (
        <div className="w-18 h-18 border-6 border-sky-300 border-t-transparent rounded-full animate-spin mx-auto" />
      ) : (
        <>
          {movies.map((movie, index) => (
            <div key={movie.id} className="my-4">
              {index !== 0 && (
                <hr className="my-20 mx-10 md:mx-auto max-w-[800px]" />
              )}
              <a href={`/movies/${movie.id}`} target="_blank">
                <h2 className="inline-block font-semibold text-2xl mb-8">
                  {movie.title}
                </h2>
              </a>
              <div className="max-w-[580px] mx-auto grid grid-cols-2 items-center md:gap-30">
                <div>
                  <a
                    href={`/movies/${movie.id}`}
                    className="inline-block"
                    target="_blank"
                  >
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
              className="bg-(--tertiary-bg-color) text-gray-800 font-semibold px-6 py-3 rounded-xl mt-20 cursor-pointer transition-all duration-200 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
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
