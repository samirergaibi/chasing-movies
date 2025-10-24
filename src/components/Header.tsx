import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { CupSoda, Hamburger } from 'lucide-react';

import logoUrl from '../images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[var(--main-bg-color)] text-white fixed w-full">
      <nav className="hidden md:flex justify-between p-5 text-xl">
        <Link to="/">
          <img src={logoUrl} alt="Chasing movies logo" className="w-12" />
        </Link>
        <div className="flex items-center gap-12">
          <Link className="hover:text-[#2b90af]" to="/random-movies">
            Random Movies
          </Link>
          <Link className="hover:text-[#2b90af]" to="/filter-movies">
            Filter Movies
          </Link>
          <Link className="hover:text-[#2b90af]" to="/about">
            About
          </Link>
          <Link to="/demo/tanstack-query" className="hover:text-[#2b90af]">
            TanStack Query
          </Link>
        </div>
      </nav>
      <nav className="md:hidden p-5 text-xl">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <img src={logoUrl} alt="Chasing movies logo" className="w-12" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Hamburger size={36} /> : <CupSoda size={36} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
