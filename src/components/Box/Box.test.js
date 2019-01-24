import React from 'react'
import { shallow } from 'enzyme'
import Box from './Box'

describe('<Box />', () => {
    it('renders correctly', () => {
        const component = shallow(
            <Box title='Box title' icon='comments'>
                Test
            </Box>
        )
        expect(component).toMatchSnapshot()
    })

    it('has icon', () => {
        const component = shallow(
            <Box title='Box title' icon='comments'>
                Test
            </Box>
        )
        expect(component.exists('.title-icon')).toBe(true)
    })

    it('do not have icon', () => {
        const component = shallow(<Box title='Box title'>Test</Box>)
        expect(component.exists('.title-icon')).toBe(false)
    })
})
