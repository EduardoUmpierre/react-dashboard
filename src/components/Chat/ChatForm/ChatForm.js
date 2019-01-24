import React from 'react'
import './ChatForm.scss'

const chatForm = ({ inputValue, onInputChange, onFormSubmit, isDisabled }) => (
    <form className='chat-form' onSubmit={e => onFormSubmit(e)}>
        <input
            type='text'
            placeholder='Type your message here...'
            value={inputValue}
            onChange={e => onInputChange(e)}
            required
        />
        <button type='submit' disabled={isDisabled}>
            Send
        </button>
    </form>
)

export default chatForm
