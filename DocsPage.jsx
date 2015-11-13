import React from 'react';
import NavigationLink from 'antwar-core/NavigationLink';
import Router from 'react-router';
import _ from 'lodash';

import config from 'config';

module.exports = React.createClass({
  displayName: 'DocsPage',
  mixins: [Router.State],
  render() {
    const section = this.props.section;
    const page = this.props.page;
    const author = page.author || config.author.name;

    return (
      <div className="post">
        <div className={'docs-nav__wrapper' +
          (page.headerImage ? ' docs-nav__wrapper--push-down' : '')}>
          <h4 className="docs-nav--header">{page.title || 'Documentation'}</h4>
          <div className="docs-nav">{_.map(section.pages(), (navPage, i) {
            return (
              {navPage.title === page.title ?
                <span key={`navPage-${i}`} className="docs-nav__link docs-nav__link--current">{navPage.title}</span> :
                <a key={`navPage-${i}`} className="docs-nav__link">{navPage.title}</a>
              }
            );
          })}</div>
        </div>

        {page.headerImage ?
          <div className="header-image" style={{
            backgroundImage: `url(${page.headerImage})`
          }} /> :
          null
        }

        <h1 className="post__heading">{page.title}</h1>

        <div className="post__content">
          {page.isDraft ?
            <span className="draft-text">Draft</span> :
            null
          }
          <div dangerouslySetInnerHTML={{__html: page.content}} />
        </div>

        {page.author ?
          <div className="post__author">{`Authored by ${page.author}`}</div> :
          null
        }
      </div>
    );
  }
});