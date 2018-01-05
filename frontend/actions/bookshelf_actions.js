import * as BookshelfAPIUtil from '../util/bookshelf_api_util';
import { receiveErrors, RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";

export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveBookshelf = (bookshelf) => ({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});

export const receiveBookshelves = (bookshelves) => ({
  type: RECEIVE_BOOKSHELVES,
  bookshelves
});

export const removeBookshelf = (bookshelf) => ({
  type: REMOVE_BOOKSHELF,
  bookshelfId: bookshelf.id
});

export const requestBookshelves = (userId) => (dispatch) => {
  BookshelfAPIUtil.fetchBookshelves(userId).then( (shelves) => {
    return dispatch(receiveBookshelves(shelves));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const requestBookshelf = (shelfId) => (dispatch) => {
  BookshelfAPIUtil.fetchBookshelf(shelfId).then( (shelf) => {
    return dispatch(receiveBookshelf(shelf));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const createBookshelf = (shelf) => (dispatch) => {
  BookshelfAPIUtil.createBookshelf(shelf).then( (shelf) => {
    return dispatch(receiveBookshelf(shelf));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const updateBookshelf = (shelf) => (dispatch) => {
  BookshelfAPIUtil.updateBookshelf(shelf).then( (shelf) => {
    return dispatch(receiveBookshelf(shelf));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const deleteBookshelf = (shelfId) => (dispatch) => {
  BookshelfAPIUtil.deleteBookshelf(shelfId).then( (shelf) => {
    return dispatch(removeBookshelf(shelf));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};
