import { Link, createFileRoute } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

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
      <div className="text-white bg-(--main-bg-color) p-10 rounded shadow-2xl">
        <p className="border-b text-center py-4 md:min-w-md">Ready?</p>
        <div className="flex justify-center items-center gap-4">
          <ArrowRight />
          <Link to="/movies">
            <p className="py-4 hover:text-[#2b90af] hover:underline">
              Let's go get some movie suggestions
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
