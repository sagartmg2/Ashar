import React from 'react'
import TinyText from './TinyText'

export default function Text(props) {
    return (
        <span className='color--red'><TinyText title={props.title}/> text-component</span>
    )
}
