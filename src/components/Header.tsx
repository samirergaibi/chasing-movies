import { Link } from '@tanstack/react-router'

import logoUrl from '../images/logo.png'

export default function Header() {
  return (
    <header className="bg-[#252525] text-white fixed w-full">
      <nav className="flex justify-between p-5">
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
    </header>
  )
}
