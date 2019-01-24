import React from 'react'
import { shallow } from 'enzyme'
import ChatItem from './ChatItem'

describe('<ChatItem />', () => {
    it('renders correctly', () => {
        const component = shallow(
            <ChatItem
                displayPortraitLeft
                message='Test'
                portrait=''
                time='1 min ago'
                userName='Eu'
            />
        )

        expect(component).toMatchSnapshot()
    })

    it('portrait is on the left', () => {
        const component = shallow(
            <ChatItem
                displayPortraitLeft
                message='Test'
                portrait=''
                time='1 min ago'
                userName='Eu'
            />
        )

        expect(component.find('.chat-item').hasClass('chat-item--left')).toBe(
            true
        )
    })

    it('portrait is on the right', () => {
        const component = shallow(
            <ChatItem
                displayPortraitLeft={false}
                message='Test'
                portrait=''
                time='1 min ago'
                userName='Eu'
            />
        )

        expect(component.find('.chat-item').hasClass('chat-item--left')).toBe(
            false
        )
    })
})
