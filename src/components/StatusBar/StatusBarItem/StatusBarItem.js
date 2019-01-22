import React from 'react'
import './StatusBarItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const statusBarItem = ({ icon, amount, text, theme }) => (
    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
        <div className={['status-bar__item', `status-bar__item--${theme}`].join(' ')}>
            <div className='status-bar__icon'>
                <FontAwesomeIcon icon={icon} fixedWidth />
            </div>

            <div className='status-bar__data'>
                <span className='status-bar__amount'>{amount}</span>
                <span className='status-bar__text'>{text}</span>
            </div>
        </div>
    </div>
)

export default statusBarItem
