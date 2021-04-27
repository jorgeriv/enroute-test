import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss';
import {
  getPeople,
  setPageNumber,
  setSearch,
} from '@enroute/data-access/swapi';
import { SearchBar } from '../search-bar/search-bar';

/* eslint-disable-next-line */
export interface PeopleListProps {}

export function PeopleList(props: PeopleListProps) {
  const {
    page,
    pageNumber,
    loaded,
    loading,
    disableNext,
    disablePrev,
  } = useSelector((state: any) => state.people);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople({}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPageNumber(1));
  }, [dispatch, loaded]);

  const nextPage = () => {
    dispatch(setPageNumber(pageNumber + 1));
  };

  const prevPage = () => {
    dispatch(setPageNumber(pageNumber - 1));
  };

  const handleSearch = (searchQuery: string) => {
    dispatch(setSearch(searchQuery));
  };

  return (
    <>
      <SearchBar onSearchChange={handleSearch} />
      <ul>
        {page.map((person, idx) => (
          <li key={idx}>{person.name}</li>
        ))}
      </ul>
      <div className={styles.actions}>
        <button onClick={prevPage} disabled={loading || disablePrev}>
          &laquo; Previous Page
        </button>
        <button onClick={nextPage} disabled={loading || disableNext}>
          Next Page &raquo;
        </button>
      </div>
      <div
        className={styles.loadingOverlay}
        style={{ display: loading ? 'flex' : 'none' }}
      >
        <span>Loading...</span>
      </div>
    </>
  );
}
