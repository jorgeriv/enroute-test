import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    availablePeople: 0,
    people: [],
    pageNumber: 1,
    pageSize: 4,
    page: [],
    search: '',
    loading: false,
    loaded: false,
    disableNext: false,
    disablePrev: false,
  },
  reducers: {
    addPeople: (state, action) => {
      return {
        ...state,
        people: [...state.people, ...action.payload.people],
        availablePeople: action.payload.availablePeople,
        loaded: true,
        loading: false,
      };
    },
    setLoading: (state) => ({ ...state, loading: true }),
    setPageNumber: (state, action) => {
      const pageSize = state.pageSize;
      const pageNumber = action.payload;
      const endIdx = pageSize * pageNumber;
      const startIdx = endIdx - pageSize;
      const page = state.people.slice(startIdx, endIdx);
      return {
        ...state,
        pageNumber,
        page,
        disableNext: !(state.availablePeople > endIdx),
        disablePrev: startIdx === 0,
      };
    },
    setSearch: (state, action) => ({
      ...state,
      availablePeople: 0,
      people: [],
      page: [],
      loaded: false,
      search: action.payload,
    }),
    getPeople: (state, action) => undefined,
  },
});

export const {
  addPeople,
  setPageNumber,
  getPeople,
  setLoading,
  setSearch,
} = peopleSlice.actions;

export default peopleSlice.reducer;
