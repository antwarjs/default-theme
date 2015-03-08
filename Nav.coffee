React = require 'react'
Router = require 'react-router'
PathsMixin = require 'antwar-core/PathsMixin.coffee'
Link = React.createFactory Router.Link
_ = require 'lodash'
Config = require 'config'

{ nav, div, a } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Nav'

	mixins: [ PathsMixin ]

	render: ->
		nav {className: 'nav'},
			_.map Config.site.theme.navigation, (link) ->
				Link
					className: 'nav__link'
					to: link.path
					key: link.path
				, link.title
