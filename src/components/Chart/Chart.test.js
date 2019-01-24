import React from 'react'
import { shallow } from 'enzyme'
import Chart from './Chart'

describe('<Chart />', () => {
    const data = [
        {
            month: 'January',
            views: '200'
        },
        {
            month: 'February',
            views: '300'
        }
    ]

    it('renders correctly', () => {
        const component = shallow(<Chart data={data} />)
        expect(component).toMatchSnapshot()
    })
})
