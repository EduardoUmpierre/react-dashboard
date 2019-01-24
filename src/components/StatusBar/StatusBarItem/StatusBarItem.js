import React from 'react'
import './StatusBarItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../Loader/Loader'

const statusBarItem = ({ icon, amount, text, theme }) => {
    const classes = ['status-bar__item', `status-bar__item--${theme}`]

    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
            <div className={classes.join(' ')}>
                <div className='status-bar__icon'>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                </div>

                <div className='status-bar__data'>
                    <Loader loaded={amount}>
                        <span className='status-bar__amount'>{amount}</span>
                        <span className='status-bar__text'>{text}</span>
                    </Loader>
                </div>
            </div>
        </div>
    )
}

export default statusBarItem
