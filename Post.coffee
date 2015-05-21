React = require 'react'
MomentDisplay = React.createFactory require './MomentDisplay'
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
			if post.date then MomentDisplay className: 'post__moment', datetime: post.date
			if author then div className: 'post__author', "Authored by #{author}"
			if post.next or post.prev
				div className: 'prevnext',
					if post.prev
							div {className: 'prevnext__prev'},
								div {className: 'prevnext__bg', style: backgroundImage: "url(#{post.prev.headerImage})"}
								span className: 'prevnext__info', 'You might alos like'
								a className: 'prevnext__link', href: "/#{config.blogRoot}/#{post.prev.url}", post.prev.title
					if post.next
							div {className: 'prevnext__next'},
								div {className: 'prevnext__bg', style: backgroundImage: "url(#{post.next.headerImage})"}
								span className: 'prevnext__info', 'Next post'
								a className: 'prevnext__link', href: "/#{config.blogRoot}/#{post.next.url}", post.next.title
