import React from 'react'
import './StatusBarItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../Loader/Loader'
import NumericLabel from 'react-pretty-numbers'

const statusBarItem = ({ icon, amount, text, theme }) => {
    const classes = ['status-bar__item', `status-bar__item--${theme}`]
    const numericLabelParams = {
        shortFormat: true,
        shortFormatPrecision: 1,
        shortFormatMinValue: 1000,
        precision: 0,
        locales: 'en-US'
    }

    return (
        <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
            <div className={classes.join(' ')}>
                <div className='status-bar__icon'>
                    <FontAwesomeIcon icon={icon} fixedWidth />
                </div>

                <div className='status-bar__data'>
                    <Loader loaded={amount !== null}>
                        <span className='status-bar__amount'>
                            <NumericLabel params={numericLabelParams}>
                                {amount}
                            </NumericLabel>
                        </span>
                        <span className='status-bar__text'>{text}</span>
                    </Loader>
                </div>
            </div>
        </div>
    )
}

export default statusBarItem
