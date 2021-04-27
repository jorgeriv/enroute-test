import { setPageNumber, getPeople, setLoading } from './peopleSlice';

export default (storeApi) => (next) => (action) => {
  if (action.type === setPageNumber.type) {
    const state = storeApi.getState();
    const pageSize = state.people.pageSize;
    const pageNumber = action.payload;
    const lastIdx = pageSize * pageNumber;
    const margin = 3;
    const search = state.people.search;
    if (lastIdx > state.people.people.length - margin) {
      const ITEMS_PER_PAGE = 10;
      const nextPage = Math.ceil((lastIdx + margin) / ITEMS_PER_PAGE);
      storeApi.dispatch(setLoading());
      storeApi.dispatch(getPeople({ page: nextPage, search }));
    }
  }

  return next(action);
};
