import React from 'react'
import './StatusBar.scss'
import StatusBarItem from './StatusBarItem/StatusBarItem'

const statusBar = ({ widgets }) => (
    <div className='row status-bar'>
        <StatusBarItem
            theme='blue'
            icon='shopping-bag'
            text='New Orders'
            amount={widgets && widgets.newOrders}
        />
        <StatusBarItem
            theme='yellow'
            icon='comment'
            text='Comments'
            amount={widgets && widgets.comments}
        />
        <StatusBarItem
            theme='green'
            icon='user'
            text='New Users'
            amount={widgets && widgets.newUsers}
        />
        <StatusBarItem
            theme='red'
            icon='eye'
            text='Page Views'
            amount={widgets && widgets.pageViews}
        />
    </div>
)

export default statusBar
