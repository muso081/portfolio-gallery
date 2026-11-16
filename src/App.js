import { useEffect, useMemo, useState } from 'react';
import './App.css';
import projects from './data/projects';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';

function App() {
  const [selected, setSelected] = useState('All');
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // filter buttons are built from the technologies found in the data
  const options = useMemo(() => {
    const names = [...new Set(projects.flatMap((p) => p.tech))].sort();
    return [
      { name: 'All', count: projects.length },
      ...names.map((name) => ({
        name,
        count: projects.filter((p) => p.tech.includes(name)).length,
      })),
    ];
  }, []);

  const q = query.trim().toLowerCase();
  const visible = projects.filter(
    (p) =>
      (selected === 'All' || p.tech.includes(selected)) &&
      (!q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q))
  );

  return (
    <div className="app">
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <section className="controls">
        <FilterBar options={options} selected={selected} onSelect={setSelected} />
        <input
          className="search"
          type="search"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search projects"
        />
      </section>

      <ProjectList projects={visible} />

      <footer className="footer">© 2026 Muhammadmuso. Built with React.</footer>
    </div>
  );
}

export default App;