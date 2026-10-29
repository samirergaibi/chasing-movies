import { useState } from 'react';
import { Link, useMatchRoute } from '@tanstack/react-router';
import { CupSoda, Hamburger } from 'lucide-react';

import logoUrl from '../images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const matchRoute = useMatchRoute();

  return (
    <header className="bg-(--main-bg-color) text-white fixed w-full">
      <nav className="hidden md:flex justify-between p-5 text-xl">
        <Link to="/">
          <img src={logoUrl} alt="Chasing movies logo" className="w-12" />
        </Link>
        <div className="flex items-center gap-12">
          <Link
            className="hover:text-[#2b90af] hover:underline"
            to="/"
            activeProps={{
              style: { color: '#2b90af', textDecoration: 'underline' },
            }}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#2b90af] hover:underline"
            to="/movies"
            activeProps={{
              style: { color: '#2b90af', textDecoration: 'underline' },
            }}
          >
            Movies
          </Link>
          <Link
            className="hover:text-[#2b90af] hover:underline"
            to="/about"
            activeProps={{
              style: { color: '#2b90af', textDecoration: 'underline' },
            }}
          >
            About
          </Link>
        </div>
      </nav>
      <nav className="md:hidden p-5 text-xl">
        <div className="w-full flex justify-between items-center">
          <Link
            className="relative z-50"
            to="/"
            onClick={() => {
              const isActive = matchRoute({ to: '/' });
              if (isActive) return;
              setIsOpen(false);
            }}
          >
            <img src={logoUrl} alt="Chasing movies logo" className="w-12" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            {isOpen ? <Hamburger size={36} /> : <CupSoda size={36} />}
          </button>
        </div>
        <div
          className={`absolute top-0 ${isOpen ? 'left-0 opacity-100' : 'left-full opacity-50'} w-screen h-screen bg-(--main-bg-color) duration-300  transition-[left, opacity]`}
        >
          <div className="flex flex-col h-full justify-center gap-12 ml-12">
            <Link
              onClick={() => {
                const isActive = matchRoute({ to: '/' });
                if (isActive) return;
                setIsOpen(false);
              }}
              className="hover:text-[#2b90af] hover:underline text-3xl"
              to="/"
              activeProps={{
                style: { color: '#2b90af', textDecoration: 'underline' },
              }}
            >
              Home
            </Link>
            <Link
              onClick={() => {
                const isActive = matchRoute({ to: '/movies' });
                if (isActive) return;
                setIsOpen(false);
              }}
              className="hover:text-[#2b90af] hover:underline text-3xl"
              to="/movies"
              activeProps={{
                style: { color: '#2b90af', textDecoration: 'underline' },
              }}
            >
              Movies
            </Link>
            <Link
              onClick={() => {
                const isActive = matchRoute({ to: '/about' });
                if (isActive) return;
                setIsOpen(false);
              }}
              className="hover:text-[#2b90af] hover:underline text-3xl"
              to="/about"
              activeProps={{
                style: { color: '#2b90af', textDecoration: 'underline' },
              }}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
