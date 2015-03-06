React = require 'react'
Nav = React.createFactory require './Nav'
require './scss/main.scss'
{ div, main } = require 'react-coffee-elements'

module.exports = React.createClass

	displayName: 'Body'


	render: ->
		div { },
			Nav()
			main { role: 'main' }, @props.children
