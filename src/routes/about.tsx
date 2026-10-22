import { createFileRoute } from '@tanstack/react-router';
import whyImg from '../images/why.jpg';
import tmdbImage from '../images/tmdb.png';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div className="max-w-[1500px] mx-auto my-50 px-8 grid md:grid-cols-2 gap-20">
      <div className="max-w-[500px] shadow-2xl p-10 rounded-2xl flex flex-col gap-8">
        <span className="text-2xl font-bold text-center">
          Why this site exists
        </span>
        <div>
          <img
            src={whyImg}
            alt="Man sitting in sofa with a laptop"
            className="max-h-[300px] m-auto"
          />
        </div>
        <p>
          Finding something to watch shouldn't feel like work. Whether you
          already have a genre in mind or want to leave it entirely to chance,
          this site was built to eliminate decision fatigue and give you quick,
          random movie recommendations in just a few clicks.
        </p>
      </div>
      <div className="shadow-2xl p-10 rounded-2xl self-center flex flex-col gap-8 max-w-[500px]">
        <span className="text-2xl font-bold text-center">Powered by TMDB</span>
        <img
          src={tmdbImage}
          alt="TMDB Logo"
          className="max-w-[276px] mx-auto"
        />
        <p>
          Movie information, ratings, and posters are provided by&nbsp;
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            TMDB
          </a>
          .&nbsp;This application uses the TMDB API but is not endorsed or
          certified by TMDB.
        </p>
      </div>
    </div>
  );
}
