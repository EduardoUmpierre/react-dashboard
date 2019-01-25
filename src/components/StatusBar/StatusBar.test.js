import React from 'react'
import { shallow } from 'enzyme'
import StatusBar from './StatusBar'

describe('<StatusBar />', () => {
    const widgets = {
        comments: 59,
        newOrders: 124,
        newUsers: 9,
        pageViews: 17827
    }

    it('renders correctly', () => {
        const component = shallow(<StatusBar widgets={widgets} />)

        expect(component).toMatchSnapshot()
    })
})
