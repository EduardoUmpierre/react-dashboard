import React, { Component } from 'react'
import './App.css'
import StatusBar from '../../components/StatusBar/StatusBar'
import Chart from '../../components/Chart/Chart'
import Chat from '../../components/Chat/Chat'
import '../../assets/icons/library'
import DashboardAPI from '../../utils/DashboardAPI'

class App extends Component {
    componentDidMount = () => {
        DashboardAPI.getWidgets().then(res =>
            this.setState({ widgets: res.data })
        )

        DashboardAPI.getPageViews().then(res =>
            this.setState({ pageViews: res.data })
        )

        DashboardAPI.getMessages().then(res =>
            this.setState({ messages: res.data })
        )
    }

    state = {
        widgets: null,
        pageViews: null,
        messages: null,
        chatInput: ''
    }

    /**
     * ChatFormSubmitHandler
     *
     * Handles the chat form submission
     *
     * @param event
     */
    chatFormSubmitHandler = event => {
        event.preventDefault()

        const message = this.state.chatInput

        const newMessage = {
            userName: 'Eu',
            time: '1 min ago',
            displayPortraitLeft: true,
            message
        }

        // The second then() always executes
        DashboardAPI.postMessage(message)
            .then()
            .catch()
            .then(() =>
                this.setState(state => ({
                    messages: [...state.messages, newMessage],
                    chatInput: ''
                }))
            )
    }

    /**
     * chatInputChangeHandler
     *
     * Handles the chat input change
     *
     * @param event
     */
    chatInputChangeHandler = event => {
        this.setState({ chatInput: event.target.value })
    }

    render() {
        return (
            <div className='App container'>
                <h2>Dashboard</h2>

                <StatusBar widgets={this.state.widgets} />
                <Chart data={this.state.pageViews} />

                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <Chat
                            messages={this.state.messages}
                            inputValue={this.state.chatInput}
                            onFormSubmit={this.chatFormSubmitHandler}
                            onInputChange={this.chatInputChangeHandler}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
