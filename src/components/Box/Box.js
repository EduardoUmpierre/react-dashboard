import React from 'react'
import './Box.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = ({ title, children, icon }) => (
    <div className='box'>
        <h3>
            {icon && (
                <span className='title-icon'>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                </span>
            )}
            {title}
        </h3>
        {children}
    </div>
)

export default Box
