import React from  'react';

import Nav from './components/Nav';

import './scss/main.scss';

import config from 'config';

if(config.theme.customStyles) {
  require('customStyles/' + config.theme.customStyles);
}

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
