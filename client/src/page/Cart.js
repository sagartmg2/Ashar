import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cart_items = useSelector((state) => state.cart.items)

    function handleCheckout() {
        // axios.post(`https://mern-ecommerce70.herokuapp.com/api/${"orders"}`, {
        //     products: cart_items
        // }, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem("access_token")}`
        //     }
        // })
        axios.get(`https://mern-ecommerce70.herokuapp.com/api/${"orders"}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
    }

    return (
        <>
            <div>cart_items {JSON.stringify(cart_items)} </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Total</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cart_items.map((el, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.quantity}</td>
                                <td>{el.price}</td>
                                <td>{el.price * el.quantity}</td>
                            </tr>
                        })
                    }
                    <tr>
                        <td colSpan={4} className="text-center">Total</td>
                        <td>11</td>
                    </tr>
                </tbody>
            </table>
            <div className='d-felx justify-content-end'>
                <button className='btn btn-primary' onClick={handleCheckout}>checkout </button>
            </div>

        </>
    )
}
