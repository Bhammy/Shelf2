import React from 'react';
import BookItemDetail from './book_item_detail';
import BookModalContainer from './book_modal_container';
import { Route } from 'react-router-dom';

class BooksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.bookReviews = this.props.bookReviews;
    this.createBookModals = this.createBookModals.bind(this);
    this.createBookItems = this.createBookItems.bind(this);
    this.closeActions = this.closeActions.bind(this);
  }

  componentDidMount() {
    this.props.requestBooks();
    this.props.requestBookshelves(this.props.currentUser.id);
    this.createBookModals(this.props.books);
    this.createBookItems(this.props.books);
  }

  componentWillReceiveProps(newProps) {
    if (this.equalBooks(this.props.books, newProps.books)) {
      this.bookReviews = newProps.bookReviews;
      this.createBookModals(newProps.books);
      this.createBookItems(newProps.books);
    }
  }

  equalBooks(oldProps, newProps) {
    for (var i = 0; i < oldProps.length; i++) {
      if (oldProps[i] !== newProps[i]) {
        return false;
      }
    }
    return true;
  }

  createBookModals(books) {
    this.bookModals = books.map( (book) => {
      return (
        <Route exact path={`/books/${book.id}`}
          key={ book.id }
          component={() => <BookModalContainer bookId={ book.id } freezeScroll={ this.freezeScroll } /> } />
      );
    });
  }

  closeActions() {
    this.props.history.goBack();
  }

  createBookItems(books) {
    this.bookItems = books.map( (book) => {
      return(
        <BookItemDetail book={ book }
          key={ book.id }
          bookshelves={ this.props.bookshelves }
          bookReview={ this.bookReviews[book.id] }
          currentUserId={ this.props.currentUser.id }
          updateReview={ this.props.updateReview }
          postReview={ this.props.postReview }
          requestBook={ this.props.requestBook }
        />
      );
    });
  }

  render() {

    return (
      <section className="books-index">
        { this.bookModals }
        <Route path="/books/:bookId" render={ () => <div className="modal-screen" onClick={ this.closeActions }></div>} />
        <table className="books-table">
          <tbody>
            <tr className="books-headers">
              <th>Cover</th>
              <th>Title/Author</th>
              <th>Avg Rating</th>
              <th>User Rating</th>
              <th>Description</th>
              <th>Add to Shelf</th>
            </tr>
            { this.bookItems }
          </tbody>
        </table>
      </section>
    );
  }

}

export default BooksIndex;
