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
    }

    state = {
        widgets: null,
        pageViews: null,
        chat: null
    }

    render() {
        return (
            <div className='App container'>
                <h2>Dashboard</h2>
                
                <StatusBar widgets={this.state.widgets} />
                <Chart data={this.state.pageViews} />

                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <Chat messages={this.state.chat} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
