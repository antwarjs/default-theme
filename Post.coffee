React = require 'react'
Moment = React.createFactory require './Moment'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div, span, header, h1 } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Post'

	mixins: [ Router.State, Paths ]

	render: ->
		post = @getPost()
		author = post.author or config.site.author
		div {className: 'post'},
			if post.headerImage? then div className: 'header-image', style: backgroundImage: "url(#{post.headerImage})"
			h1 {className: 'post__heading'},
				post.title
			div className: 'post__content',
				if post.draft then span className: 'draft-text', ' Draft'
				div dangerouslySetInnerHTML: __html: post.content
			Moment className: 'post__moment', datetime: post.date
			if author then div className: 'post__author', "Authored by #{author}"
