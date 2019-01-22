import React, { Component } from 'react'
import './App.css'
import StatusBar from '../../components/StatusBar/StatusBar'
import Report from '../../components/Report/Report'
import Chat from '../../components/Chat/Chat'
import '../../assets/icons/library'
import DashboardAPI from '../../utils/DashboardAPI'

class App extends Component {
    componentDidMount = () => {
        DashboardAPI.getWidgets().then(res => this.setState({ widgets: res.data }))
    }

    state = {
        widgets: null
    }

    render() {
        return (
            <div className='App container'>
                <h2>Dashboard</h2>
                <StatusBar widgets={this.state.widgets} />
                <Report />
                <Chat />
            </div>
        )
    }
}

export default App
