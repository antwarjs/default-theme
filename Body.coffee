React = require 'react'
Nav = React.createFactory require './Nav'
require './scss/main.scss'
{ div, main } = require 'react-coffee-elements'
config = require 'config'
if config.theme.customStyles?
  require 'customStyles/' + config.theme.customStyles

module.exports = React.createClass

	displayName: 'Body'


	render: ->
		div { },
			Nav()
			main { role: 'main' }, @props.children
