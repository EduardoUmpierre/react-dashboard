import React from 'react'

const Box = ({ title, children }) => (
    <div>
        <h3>{title}</h3>
        {children}
    </div>
)

export default Box
