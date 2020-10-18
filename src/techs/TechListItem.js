import React from 'react'
import PropTypes from 'prop-types'

const TechListItem = ({tech}) => {
    return (
            <li className="collection-item" key={tech.id}>{tech.firstname} {tech.lastname}</li>
    )
}

TechListItem.propTypes = {
    tech:PropTypes.object.isRequired,
}

export default TechListItem
