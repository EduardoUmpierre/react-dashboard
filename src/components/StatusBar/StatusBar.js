import React from 'react'
import './StatusBar.scss'
import StatusBarItem from './StatusBarItem/StatusBarItem'

const statusBar = ({ widgets }) => {
    let component = 'Loading'

    if (widgets) {
        component = (
            <div className='row status-bar'>
                <StatusBarItem
                    theme='blue'
                    icon='shopping-bag'
                    text='New Orders'
                    amount={widgets.newOrders}
                />
                <StatusBarItem
                    theme='yellow'
                    icon='comment'
                    text='Comments'
                    amount={widgets.comments}
                />
                <StatusBarItem
                    theme='green'
                    icon='user'
                    text='New Users'
                    amount={widgets.newUsers}
                />
                <StatusBarItem
                    theme='red'
                    icon='eye'
                    text='Page Views'
                    amount={widgets.pageViews}
                />
            </div>
        )
    }

    return component
}

export default statusBar
