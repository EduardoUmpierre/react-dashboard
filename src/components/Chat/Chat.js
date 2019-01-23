import React from 'react'
import './Chat.scss'
import Box from '../Box/Box'
import ChatItem from './ChatItem/ChatItem'
import Loader from '../Loader/Loader'
import ChatForm from './ChatForm/ChatForm'

const chat = ({ messages, inputValue, onFormSubmit, onInputChange }) => (
    <Box title='Chat'>
        <div className='chat'>
            <Loader isLoading={!messages}>
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
        />
    </Box>
)

export default chat
