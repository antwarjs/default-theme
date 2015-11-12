import React from 'react';
import DefaultSectionItem from './DefaultSectionItem';
import BlogItem from './BlogItem';
import DocsItem from './DocsItem';

module.exports = React.createClass({
  displayName: 'SectionItem',
  render() {
    const page = this.props.page;

    if(page.layout === 'blog') {
      return <BlogItem {...this.props} />;
    }
    else if(page.layout === 'docs') {
      return <DocsItem {...this.props} />;
    }
    else {
      return <DefaultSectionItem {...this.props} />;
    }
  }
});
