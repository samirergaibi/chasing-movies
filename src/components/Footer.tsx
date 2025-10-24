import tmdbImage from '../images/tmdb.png';

function Footer() {
  return (
    <footer className="bg-[var(--main-bg-color)] text-white text-xs flex justify-center py-4">
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2"
      >
        <img src={tmdbImage} className="h-4" />
        Powered by TMDB
      </a>
    </footer>
  );
}

export default Footer;
