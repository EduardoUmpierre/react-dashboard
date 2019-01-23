import React from 'react'
import './ChatItem.scss'

const chatItem = ({
    displayPortraitLeft,
    userName,
    portrait,
    time,
    message
}) => {
    let classes = ['chat-item']

    if (displayPortraitLeft) {
        classes.push('chat-item--left')
    }

    return (
        <div className={classes.join(' ')}>
            <div className='chat-item__photo'>
                {portrait && <img src={portrait} alt={userName} />}
            </div>

            <div className='chat-item__data'>
                <div className='chat-item__upper'>
                    <div className='chat-item__name'>{userName}</div>
                    <div className='chat-item__time'>{time}</div>
                </div>
                <p className='chat-item__message'>{message}</p>
            </div>
        </div>
    )
}

export default chatItem
