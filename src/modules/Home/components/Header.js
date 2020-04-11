import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    const {
      searchString,
      controlSearchInput,
      handleAuthorForm
    } = this.props;
    return (
      <div className='header-wrapper'>
        <input
          type="text"
          autoComplete="off"
          value={searchString}
          onChange={controlSearchInput}
          placeholder={searchString || 'Search speeches by author name...'}
        />
        <button
          onClick={handleAuthorForm}
        >Add Speech</button>
      </div>
    )
  }
}

export default Header;
