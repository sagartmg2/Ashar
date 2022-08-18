import React from 'react'

// function sum()
// {

// }

// sum(12,1)


export default function ErrorText({ msg, field, data }) {

    console.log({ data });
    console.log({ field });

    if (data[field]) {
        return null
    }

    return (
        <small className='text-danger'>{msg}</small>
    )
}
