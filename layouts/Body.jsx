import React from  'react';

import Nav from '../components/Nav';

module.exports = React.createClass({
  displayName: 'Body',
  render() {
    return (
      <div>
        <Nav />

        <main role="main">{this.props.children}</main>
      </div>
    );
  }
});
