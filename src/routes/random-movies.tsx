import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/random-movies')({
  component: RandomMovies,
});

function RandomMovies() {
  return (
    <div className="py-50 text-center">
      <h1 className="text-3xl font-bold my-6">Random movies</h1>
      <div className="bg-yellow-200 p-2 inline-block shadow mx-2">
        <p>
          Reloading this page will result in twenty new randomly selected
          movies.
        </p>
      </div>
    </div>
  );
}
