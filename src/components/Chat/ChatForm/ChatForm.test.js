import React from 'react'
import { shallow } from 'enzyme'
import ChatForm from './ChatForm'

describe('<ChatForm />', () => {
    it('renders correctly', () => {
        const component = shallow(<ChatForm inputValue='' isDisabled={false} />)
        expect(component).toMatchSnapshot()
    })

    it('button is disabled', () => {
        const component = shallow(<ChatForm inputValue='' isDisabled={true} />)
        expect(component.find('button').props().disabled).toBe(true)
    })

    it('button is enabled', () => {
        const component = shallow(<ChatForm inputValue='' isDisabled={false} />)
        expect(component.find('button').props().disabled).toBe(false)
    })
})
