import React from 'react'
import './Chat.scss'
import Box from '../Box/Box'
import ChatItem from './ChatItem/ChatItem'
import Loader from '../Loader/Loader'
import ChatForm from './ChatForm/ChatForm'

const chat = ({
    messages,
    inputValue,
    onFormSubmit,
    onInputChange,
    isFormDisabled
}) => (
    <Box title='Chat' icon='comments'>
        <div className='chat'>
            <Loader loaded={messages}>
                {messages &&
                    messages.map((item, index) => (
                        <ChatItem
                            displayPortraitLeft={item.displayPortraitLeft}
                            message={item.message}
                            portrait={item.portrait}
                            time={item.time}
                            userName={item.userName}
                            key={index}
                        />
                    ))}
            </Loader>
        </div>

        <ChatForm
            inputValue={inputValue}
            onFormSubmit={onFormSubmit}
            onInputChange={onInputChange}
            isDisabled={!messages || isFormDisabled}
        />
    </Box>
)

export default chat
