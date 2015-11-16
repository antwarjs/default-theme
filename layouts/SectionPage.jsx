import React from 'react';
import DefaultSectionPage from './DefaultSectionPage';
import BlogPage from './BlogPage';
import DocsPage from './DocsPage';

module.exports = React.createClass({
  displayName: 'SectionPage',
  render() {
    const page = this.props.page;

    if(page.layout === 'blog') {
      return <BlogPage {...this.props} />;
    }
    else if(page.layout === 'docs') {
      return <DocsPage {...this.props} />;
    }
    else {
      return <DefaultSectionPage {...this.props} />;
    }
  }
});
