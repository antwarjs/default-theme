React = require 'react'
Nav = React.createFactory require './Nav'
require './scss/main.scss'

{ div, main, script, link } = require 'react-coffee-elements'

config = require 'config'
if config.site.theme.customStyles?
  require 'customStyles/' + config.site.theme.customStyles

module.exports = React.createClass

	displayName: 'Body'

	render: ->
		div { },
			Nav()
			main { role: 'main' }, @props.children
			if config.site.theme.analyticsId?
				script dangerouslySetInnerHTML: __html: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '#{config.site.theme.analyticsId}', 'auto');ga('send', 'pageview');"
			link # XXX: Inject into head
				href: 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900,400italic,600italic,900italic'
				rel: 'stylesheet'
				type: 'text/css'
