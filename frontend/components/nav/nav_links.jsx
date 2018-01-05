import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ul className="nav-links">
        <li><Link to={"/books"}>Browse Books</Link></li>
        <li><Link to={`/users/${this.props.currentUser.id}/bookshelves`}> My Shelves </Link></li>
        <li><button onClick={ this.props.logout }> Logout </button></li>
      </ul>
    );
  }
}

export default NavLinks;
