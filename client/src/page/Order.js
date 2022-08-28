import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Order() {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`https://mern-ecommerce70.herokuapp.com/api/${"orders"}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(res => {
                setOrder(res.data.data)
            })

    }, []);
    return (
        <div>
            {
                orders.map(order => {
                    return <div>
                        <p>Order # {order._id}</p>
                        <p>Created Date# {order.createdAt}</p>
                        <hr />
                        <strong>Product</strong>
                        <table>
                            <thead>
                                <th>name</th>
                                <th>price</th>
                                <th>quantit</th>
                                <th>status</th>
                            </thead>
                            {
                                order.products.map(product => {
                                    return <tr>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td><span class={`badge bg-${product.status == "completed" ? "success" : "primary"}`}>{product.status}</span></td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                })
            }
        </div>
    )
}
