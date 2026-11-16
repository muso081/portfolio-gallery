function Header({ theme, onToggleTheme }) {
  return (
    <header className="hero">
      <div className="hero-top">
        <span className="badge">Portfolio</span>
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle light or dark theme">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <h1>
        Hi, I'm <span className="grad">Muhammadmuso</span>
      </h1>
      <p className="tagline">
        Computer Science student who builds small, fast websites. Browse my projects below and
        filter them by technology.
      </p>

      <div className="hero-links">
        <a className="btn" href="https://github.com/muso081" target="_blank" rel="noreferrer">
          GitHub profile
        </a>
      </div>
    </header>
  );
}

export default Header;