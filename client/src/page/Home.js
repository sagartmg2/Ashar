import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Home() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products`)
            .then(response => {
                console.log(response.data.data[0].data);
                setProduct(response.data.data[0].data)
            })
            .catch(err => {

            })
    }, []);


    return (
        <div>
            <h1>Proudcts</h1>
            <hr />
            <div className='row'>
                {
                    products.map(el => {
                        return <div class="col-3 p-2">
                            <div class="card " >
                                <img src={`${el.images[0]}`} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h2>${el.price}</h2>
                                    <h5 class="card-title">{el.name}</h5>
                                    <p class="card-text">{el.description}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
