import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteReview } from '../../util/review_api_util';
import { requestBook } from '../../actions/book_actions';
import BookModal from './book_modal';

const mapStateToProps = (state, ownProps) => ({
  book: ownProps.book,
  bookshelves: Object.values(state.entities.bookshelves),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteReview: () => dispatch(deleteReview()),
  requestBook: (bookId) => dispatch(requestBook(bookId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookModal));
