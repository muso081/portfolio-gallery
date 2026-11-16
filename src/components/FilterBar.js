function FilterBar({ options, selected, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {options.map(({ name, count }) => (
        <button
          key={name}
          className={name === selected ? 'active' : ''}
          onClick={() => onSelect(name)}
        >
          {name} <span className="count">{count}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterBar;