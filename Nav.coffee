React = require 'react'
Router = require 'react-router'
PathsMixin = require 'elements/PathsMixin.coffee'
Link = React.createFactory Router.Link
_ = require 'lodash'
Config = require 'config'

{ nav, div, a } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Nav'

	mixins: [ PathsMixin ]

	render: ->
		nav {className: 'nav'},
			_.map Config.theme.config.navLinks, (link) ->
				Link
					className: 'nav__link'
					to: link.path
					key: link.path
				, link.title
