React = require('react')
moment = require('moment')

{ time } = require 'react-coffee-elements'

module.exports = React.createClass

    displayName: 'MomentDisplay'

    getDefaultProps: ->
        format: 'D MMM YYYY'
        style: {}

    propTypes:
        datetime: React.PropTypes.string.isRequired
        format: React.PropTypes.string

    render: ->
        time
            dateTime: @props.datetime
            className: @props.className
        ,
            moment(new Date @props.datetime)
                .format @props.format
