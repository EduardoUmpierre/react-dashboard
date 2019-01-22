import React from 'react'
import './Box.scss'

const Box = ({ title, children }) => (
    <div className='box'>
        <h3>{title}</h3>
        {children}
    </div>
)

export default Box
