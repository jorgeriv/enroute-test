import React, { useState } from 'react';
import styles from './search-bar.module.scss';

/* eslint-disable-next-line */
export interface SearchBarProps {
  onSearchChange: (query: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const { onSearchChange: cb } = props;
  const [query, setQuery] = useState('');
  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      cb(query);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
        onKeyDown={keyDownHandler}
      />
      <button onClick={() => cb(query)}>Find</button>
    </div>
  );
}
