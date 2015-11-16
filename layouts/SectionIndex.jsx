import React from 'react';
import Router from 'react-router';
import _ from 'lodash';
import SectionLink from 'antwar-core/SectionLink';
import Moment from '../components/Moment';

module.exports = React.createClass({
  displayName: 'SectionIndex',
  mixins: [Paths],
  render() {
    const section = this.props.section;

    return (
      <div className="grid">
        <h1>{section.title || 'Blog posts'}</h1>

        <ul className="post-list">{_.map(section.pages(), (page, i) => {
          return (
            <li key={`post-list-item-${i}`}>
              <h3 className="post-list__heading">
                <SectionLink page={page}>{page.title}</SectionLink>

                {page.isDraft ?
                  <span className="draft-text">Draft</span> :
                  null
                }
              </h3>

              {page.date ?
                <Moment className="post__moment" datetime={page.date} /> :
                null
              }

              <p className="post-list__preview">{page.preview}</p>
            </li>
          );
        })}</ul>
      </div>
    );
  }
});
