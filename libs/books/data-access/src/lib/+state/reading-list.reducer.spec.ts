import * as ReadingListActions from './reading-list.actions';
import {
  initialState,
  readingListAdapter,
  reducer,
  State
} from './reading-list.reducer';
import { createBook, createReadingListItem } from '@sct/shared/testing';

describe('Books Reducer', () => {
  describe('valid Books actions', () => {
    let state: State;

    beforeEach(() => {
      state = readingListAdapter.setAll(
        [createReadingListItem('A'), createReadingListItem('B')],
        initialState
      );
    });

    it('loadBooksSuccess should load books from reading list', () => {
      const list = [
        createReadingListItem('A'),
        createReadingListItem('B'),
        createReadingListItem('C')
      ];
      const action = ReadingListActions.loadReadingListSuccess({ list });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toEqual(3);
    });

    //this case is not handled by the reducer, so when we dispatch the action which is not 
    //handled by the reducer, then the reducer returns the state by default with out any updates so loaded is flase and error is null
    it('failedAddToReadingList should undo book addition to the state', () => {
       const action = ReadingListActions.failedAddToReadingList({
       book: createBook('B')
      });

      const result: State = reducer(state, action);
      expect(result.loaded).toBe(false);
      expect(result.error).toBeNull();
    });
    //this case is not handled by the reducer, so when we dispatch the action which is not 
    //handled by the reducer, then the reducer returns the state by default with out any updates so loaded is flase and error is null
    it('failedRemoveFromReadingList should undo book removal from the state', () => {
      const action = ReadingListActions.failedRemoveFromReadingList({
        item: createReadingListItem('C')
      });

      const result: State = reducer(state, action);
      expect(result.loaded).toBe(false);
      expect(result.error).toBeNull();
    });
   });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
});
