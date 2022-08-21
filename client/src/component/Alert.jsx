import React from 'react'

// export default function Alert(props) {
export default function Alert({errors}) {
    return (
        <div class={`alert alert-${errors.status}`} role="alert">
            {errors.msg}
        </div>
    )
}
