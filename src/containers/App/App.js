import React, { Component } from 'react'
import './App.css'
import StatusBar from '../../components/StatusBar/StatusBar'
import Report from '../../components/Report/Report'
import Chat from '../../components/Chat/Chat'
import '../../assets/icons/library'

class App extends Component {
    render() {
        return (
            <div className='App container'>
                <h2>Dashboard</h2>
                <StatusBar />
                <Report />
                <Chat />
            </div>
        )
    }
}

export default App
