import React from 'react'
import { shallow } from 'enzyme'
import Loader from './Loader'

describe('<Loader />', () => {
    it('renders correctly', () => {
        const component = shallow(<Loader loaded={true}>Test</Loader>)

        expect(component).toMatchSnapshot()
    })

    it('is loading', () => {
        const component = shallow(<Loader loaded={false}>Test</Loader>)

        expect(component.exists('.loader')).toBe(true)
    })

    it('is loaded', () => {
        const component = shallow(<Loader loaded={true}>Test</Loader>)

        expect(component.exists('.loader')).toBe(false)
    })
})
