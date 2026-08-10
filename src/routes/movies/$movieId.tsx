import { createFileRoute } from '@tanstack/react-router';
import {
  CalendarDays,
  ChevronRight,
  Clock,
  Drama,
  ScrollText,
  Star,
  StarHalf,
  UsersRound,
} from 'lucide-react';

import type { Movie, TMDBVideo } from '@/types';
import { getRuntime } from '@/utils/get-runtime';

function getYoutubeVideoUrl(videos: TMDBVideo[] | undefined) {
  if (!videos) return null;

  const youtubeTrailers = videos.filter(
    (video) => video.site === 'YouTube' && video.type === 'Trailer',
  );
  if (!youtubeTrailers.length) return null;

  const officialTrailer = youtubeTrailers.find((video) => video.official);
  if (officialTrailer) {
    return `https://www.youtube.com/embed/${officialTrailer.key}`;
  }
  return `https://www.youtube.com/embed/${youtubeTrailers[0].key}`;
}

export const Route = createFileRoute('/movies/$movieId')({
  component: Movie,
  loader: async ({ params }) => {
    const movieId = params.movieId;
    const resp = await fetch(
      `http://localhost:3011/tmdb/movie/${movieId}?append_to_response=videos,credits`,
    );
    return await resp.json();
  },
});

function Movie() {
  const movie: Movie = Route.useLoaderData();

  const rating = movie.vote_average / 2;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  const youtubeVideoUrl = getYoutubeVideoUrl(movie.videos?.results);

  return (
    <div className="my-40">
      <div className="max-w-[850px] bg-(--secondary-bg-color) text-white md:px-25 py-10 mx-4 md:mx-auto rounded shadow-[1px_1px_8px_#000] flex flex-col items-center gap-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          {movie.title}
        </h1>
        <div className="grid grid-cols-5 gap-1">
          {[...Array(filledStars)].map((_, index) => (
            <Star key={index} fill="gold" strokeWidth={0} />
          ))}
          {hasHalfStar && (
            <div className="relative">
              <Star fill="black" strokeWidth={0} className="absolute z-10" />
              <StarHalf fill="gold" strokeWidth={0} className="absolute z-20" />
            </div>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <Star key={index} fill="black" strokeWidth={0} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2">
            <CalendarDays fill="steelblue" color="black" />
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
          <div className="grid grid-rows-[25px_1fr] gap-2">
            <div className="relative flex justify-center">
              <Drama fill="rgb(252, 108, 108)" className="absolute" />
              <Drama color="black" className="absolute" />
            </div>
            <div className="flex flex-col items-center">
              {movie.genres.map((genre: any) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-[25px_1fr] gap-2 justify-center">
            <div className="relative flex justify-center">
              <Clock fill="rgb(43, 175, 84)" className="absolute" />
              <Clock color="black" className="absolute" />
            </div>
            <span>{getRuntime(movie.runtime)}</span>
          </div>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="mx-auto mt-8"
      />
      <div className="max-w-[850px] bg-(--secondary-bg-color) text-white px-8 md:px-25 pt-18 pb-10 mx-4 md:mx-auto rounded shadow-[1px_1px_8px_#000] relative -top-12 -z-10">
        <div className="flex items-center justify-center gap-1 mb-4">
          <ScrollText className="text-amber-400" />
          <h2 className="font-medium text-xl">Plot</h2>
        </div>
        <p>{movie.overview}</p>
      </div>
      {youtubeVideoUrl && (
        <iframe
          src={youtubeVideoUrl}
          title={`${movie.title} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="max-w-[1050px] aspect-video mx-4 md:mx-auto mb-8"
        ></iframe>
      )}
      <div className="max-w-[850px] bg-(--secondary-bg-color) text-white px-8 md:px-25 py-10 mx-4 md:mx-auto rounded shadow-[1px_1px_8px_#000]">
        <div className="flex items-center justify-center gap-1 mb-4">
          <UsersRound className="text-sky-300" />
          <h2 className="font-medium text-xl">Top Cast</h2>
        </div>
        <div className="grid grid-row-4 justify-center gap-2">
          {movie.credits?.cast?.slice(0, 4).map((cast) => {
            const castGoogleUrl = `https://www.google.com/search?q=${cast.name.split(' ').join('+')}`;
            return (
              <div className="grid grid-cols-4 items-center">
                <a
                  href={castGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w45${cast.profile_path}`}
                    alt={`${cast.name}`}
                    className="justify-self-end mr-4"
                  />
                </a>
                <a
                  href={castGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{cast.name}</span>
                </a>
                <ChevronRight className="justify-self-center" />
                <span>{cast.character}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
