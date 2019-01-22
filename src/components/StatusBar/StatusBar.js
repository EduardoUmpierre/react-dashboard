import React from 'react'
import StatusBarItem from './StatusBarItem/StatusBarItem'

const statusBar = props => (
    <div className='row'>
        <StatusBarItem theme='blue' icon='shopping-bag' text='New Orders' amount='120' />
        <StatusBarItem theme='yellow' icon='comment' text='Comments' amount='52' />
        <StatusBarItem theme='green' icon='user' text='New Users' amount='24' />
        <StatusBarItem theme='red' icon='eye' text='Page Views' amount='25.2k' />
    </div>
)

export default statusBar
