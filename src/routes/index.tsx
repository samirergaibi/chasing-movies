import { Link, createFileRoute } from '@tanstack/react-router';
import { BadgeQuestionMark, Funnel } from 'lucide-react';

import popcornImgUrl from '../images/popcorn.png';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div
      style={{ backgroundImage: `url(${popcornImgUrl})` }}
      className="bg-cover h-screen w-full text-white text-lg flex flex-col justify-center items-center gap-10"
    >
      <p className="text-center text-xl">
        Welcome to <strong>Chasing Movies</strong>! <br /> A centralized place
        for you to find a movie to watch.
      </p>
      <div className="text-white bg-[var(--main-bg-color)] p-10 rounded shadow-2xl">
        <p className="border-b text-center py-4 md:min-w-md">You....</p>
        <div className="flex justify-center items-center gap-4">
          <BadgeQuestionMark />
          <Link to="/random-movies">
            <p className=" text-center py-4 hover:text-[#2b90af]">
              Have no idea what to watch
            </p>
          </Link>
        </div>
        <div className="border-b" />
        <div className="flex justify-center items-center gap-4">
          <Funnel />
          <Link to="/filter-movies">
            <p className="py-4 text-center hover:text-[#2b90af]">
              Kinda know what to watch
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
