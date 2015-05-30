React = require 'react'
PathsMixin = require 'antwar-core/PathsMixin'
NavigationLink = React.createFactory require 'antwar-core/NavigationLink'
_ = require 'lodash'
Config = require 'config'

{ nav, div, a, input, label } = require 'react-coffee-elements'

module.exports = React.createClass

    displayName: 'Nav'

    mixins: [ PathsMixin ]

    render: ->
        div {className: 'nav__wrapper'},
            input type: 'checkbox', className: 'nav__toggle', id: 'nav__toggle'
            label {className: 'nav__toggle-label', htmlFor: 'nav__toggle'}
            nav {className: 'nav'},
                _.map Config.theme.navigation, (link, i) ->
                    div {key: 'link-' + i, className: 'nav__link'},
                        NavigationLink {item: link}
