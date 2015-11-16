import React from 'react';
import Router from 'react-router';
import Moment from '../components/Moment';

module.exports = React.createClass({
  displayName: 'DefaultSectionPage',
  render() {
    const page = this.props.page;

    return (
      <div className="post">
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
        {page.date ?
          <Moment className="post__moment" datetime={page.date} /> :
          null
        }
        {page.author ?
          <div className="post__author">{`Authored by ${page.author}`}</div> :
          null
        }
      </div>
    );
  }
});
