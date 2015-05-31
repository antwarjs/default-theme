React = require 'react'
DefaultSectionItem = React.createFactory require './DefaultSectionItem'
BlogItem = React.createFactory require './BlogItem'
DocsItem = React.createFactory require './DocsItem'
Paths = require 'antwar-core/PathsMixin'
Router = require 'react-router'
config = require 'config'


module.exports = React.createClass

  displayName: 'SectionItem'

  mixins: [ Router.State, Paths ]

  render: ->
    item = @getItem()
    console.log item.layout
    if item.layout is 'blog'
      BlogItem @props
    else if item.layout is 'docs'
      DocsItem @props
    else
      DefaultSectionItem @props
