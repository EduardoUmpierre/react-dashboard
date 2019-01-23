import React from 'react'

const loader = ({ isLoading, children }) => {
    let component = <div>Loading</div>

    if (!isLoading) {
        component = children
    }

    return component
}

export default loader
