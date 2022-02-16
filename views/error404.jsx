const React = require('react')
const Default = require('./layouts/default')

function Error404 () {
    return (
    <Default>
        <h2>404 Page Not Found</h2>
    </Default>
    )
}

module.exports = Error404