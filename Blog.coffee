React = require('react')
Router = require('react-router')
Link = React.createFactory Router.Link
MomentDisplay = React.createFactory require('./MomentDisplay')
Paths = require('antwar-core/PathsMixin')
BlogLink = React.createFactory require('antwar-core/BlogLink')
config = require 'config'
_ = require('lodash')

{ div, li, p, ul, h1, h3, span } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Blog'

	mixins: [
		Router.State
		Paths
	]

	render: ->
		div {className: 'grid'},
			h1 config.theme.blogTitle or 'Blog posts'
			ul { className: 'post-list'},
				_.map _.sortBy(@getAllPosts(), 'date').reverse(), (post) =>
					li key: post.url,
						h3 {className: 'post-list__heading'},
							BlogLink
								post: post
							, post.title
							if post.draft then span className: 'draft-text', ' Draft'
						if post.date
							MomentDisplay
								datetime: post.date
						p {className: 'post-list__preview'},
							post.preview
