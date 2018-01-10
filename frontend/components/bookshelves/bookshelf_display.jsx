import React from 'react';
import BookItemDetail from '../books/book_item_detail';

class BookshelfDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.requestBookshelf(this.props.match.params.id);
    }
  }

  render () {

    let bookItems;

    if (this.props.match.params.id === "new") {
      bookItems = null;
    } else {
      bookItems = this.props.bookshelf.books.map( (book, idx) => ( <BookItemDetail book={ book } key = { book.id } bookshelves={ this.props.bookshelves }/>) );
    }

    return (
      <div>
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
            { bookItems }
          </tbody>
        </table>
      </div>
    );

  }

}

export default BookshelfDisplay;
