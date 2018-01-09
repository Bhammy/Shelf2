import React from 'react';

class ReviewRating extends React.Component {

  constructor(props) {
    super(props);
    this.bookId = this.props.book.id;
    this.setRating = this.setRating.bind(this);
    if (this.props.review.rating) {
      this.state = Object.assign({}, this.props.review);
      this.action = this.props.updateReview.bind(this);
      this.rating = this.props.review.rating;
    } else {
      this.rating = 0;
      this.state = Object.assign({}, this.props.review);
      this.action = this.props.postReview.bind(this);
    }
  }

  setRating (e) {
    let val = parseFloat(e.target.value);
    this.setState({ rating: val }, () => this.action(this.state));
  }

  render() {
    return (
      <div className="review-form-rating">
          <input type="radio" value={5} name={`rating-${this.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id="rating-input-5"
            defaultChecked={ (this.rating === 5 ) } />
          <label className={`rating-img-${this.bookId}`} htmlFor="rating-input-5">
        </label>

          <input type="radio" value={4} name={`rating-${this.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id="rating-input-4"
            defaultChecked={ (this.rating === 4 ) } />
          <label className={`rating-img-${this.bookId}`} htmlFor="rating-input-4">
        </label>

          <input type="radio" value={3} name={`rating-${this.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id="rating-input-3"
            defaultChecked={ (this.rating === 3 ) } />
          <label className={`rating-img-${this.bookId}`} htmlFor="rating-input-3">
        </label>

          <input type="radio" value={2} name={`rating-${this.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id="rating-input-2"
            defaultChecked={ (this.rating === 2 ) } />
          <label className={`rating-img-${this.bookId}`} htmlFor="rating-input-2">
        </label>

          <input type="radio" value={1} name={`rating-${this.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id="rating-input-1"
            defaultChecked={ (this.rating === 1 ) } />
          <label className={`rating-img-${this.bookId}`} htmlFor="rating-input-1">
        </label>
      </div>
    );
  }
}

export default ReviewRating;
