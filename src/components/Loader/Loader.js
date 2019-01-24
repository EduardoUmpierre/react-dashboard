import React from 'react'
import './Loader.scss'
import { ClipLoader } from 'react-spinners'

const loader = ({ loaded, children }) => {
    let component = (
        <div className='loader'>
            <ClipLoader loading color={'#c1c1c1'} />
        </div>
    )

    if (loaded) {
        component = children
    }

    return component
}

export default loader
