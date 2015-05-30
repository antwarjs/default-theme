React = require 'react'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div } = require 'react-coffee-elements'

module.exports = React.createClass

    displayName: 'MarkdownPage'

    mixins: [ Router.State, Paths ]

    render: ->
        page = @getPage()
        div {className: 'post post--page'},
            div className: 'post__content', dangerouslySetInnerHTML: __html: page.content
