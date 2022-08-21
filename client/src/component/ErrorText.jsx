import React from 'react'

// function sum()
// {

// }

// sum(12,1)


export default function ErrorText({ errors, field, data }) {

    console.log({ data });
    console.log({ field });

    console.log("render");
    if (data[field] && !errors[field]) {
        return null
    }

    return (
        <small className='text-danger'>{errors[field]}</small>
    )
}
