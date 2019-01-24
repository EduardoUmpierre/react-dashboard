import React from 'react'
import { shallow } from 'enzyme'
import Chat from './Chat'

describe('<Chat />', () => {
    const messages = [
        {
            displayPortraitLeft: false,
            message: 'Test',
            portrait: null,
            time: '2 min ago',
            userName: 'Eu'
        },
        {
            displayPortraitLeft: false,
            message: 'Test',
            portrait: null,
            time: '1 min ago',
            userName: 'Eu'
        }
    ]

    it('renders correctly', () => {
        const component = shallow(<Chat messages={messages} />)

        expect(component).toMatchSnapshot()
    })
})
