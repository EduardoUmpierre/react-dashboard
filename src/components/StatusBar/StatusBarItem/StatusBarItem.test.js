import React from 'react'
import { shallow } from 'enzyme'
import StatusBarItem from './StatusBarItem'

describe('<StatusBarItem />', () => {
    it('renders correctly', () => {
        const component = shallow(
            <StatusBarItem
                theme='blue'
                icon='shopping-bag'
                text='New Orders'
                amount='1000'
            />
        )

        expect(component).toMatchSnapshot()
    })
})
