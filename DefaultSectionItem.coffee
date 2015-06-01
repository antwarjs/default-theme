React = require 'react'
MomentDisplay = React.createFactory require './MomentDisplay'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'

{ div, span, header, h1, a } = require 'react-coffee-elements'

module.exports = React.createClass

  displayName: 'Item'

  mixins: [ Router.State, Paths ]

  render: ->
    item = @getItem()
    author = item.author or config.author.name
    div className: 'post',
      if item.headerImage? then div className: 'header-image', style: backgroundImage: "url(#{item.headerImage})"
      h1 className: 'post__heading',
        item.title
      div className: 'post__content',
        if item.isDraft then span className: 'draft-text', ' Draft'
        div dangerouslySetInnerHTML: __html: item.content
      if item.date then MomentDisplay className: 'post__moment', datetime: item.date
      if author then div className: 'post__author', "Authored by #{author}"
