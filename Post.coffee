React = require 'react'
Moment = React.createFactory require './Moment'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div, span, header, h1, a } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Post'

	mixins: [ Router.State, Paths ]

	render: ->
		post = @getPost()
		author = post.author or config.author.name
		div {className: 'post'},
			if post.headerImage? then div className: 'header-image', style: backgroundImage: "url(#{post.headerImage})"
			h1 {className: 'post__heading'},
				post.title
			div className: 'post__content',
				if post.draft then span className: 'draft-text', ' Draft'
				div dangerouslySetInnerHTML: __html: post.content
			Moment className: 'post__moment', datetime: post.date
			if author then div className: 'post__author', "Authored by #{author}"
			if post.next or post.prev
				div className: 'prevnext',
					if post.prev
							a className: 'prevnext__prev', href: post.prev.url, '« ' + post.prev.title
					if post.next
							a className: 'prevnext__next', href: post.next.url, post.next.title + ' »'
