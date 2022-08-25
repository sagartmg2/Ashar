import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Show() {

    let { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${id}`)
            .then(response => {
                console.log(response.data.data);
                setProduct(response.data.data)
            })
            .catch(err => {

            })
    }, []);

    // console.log();

    // if(!product._id){
    //     return <><h1>show spinerr....</h1></>
    // }

    return (
        <div className='row'>
            <div className='col-md-6'>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {
                            product?.images?.length > 0
                                ?
                                product.images.map((image, index) => {
                                    return <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
                                        <img className="d-block w-100" src={image} alt={`${product.descrption}`} />
                                    </div>
                                })
                                :
                                <div className={`carousel-item ${true ? "active" : ""}`}>
                                    <img className="d-block w-100" src={""} class="img-thumbnail" alt={`${product.descrption}`} />
                                </div>

                        }
                        {/* 
                                <div className="carousel-item ">
                                    <img className="d-block w-100" src={product.images[0]} alt="First slide" />
                                </div>
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={product.images[1]} alt="First slide" />
                                </div>
                                 */}

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div className='col-md-6'>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{product.descrption}</p>
                <p>{product.in_stock}</p>
                <p>{product.brands}</p>
                <p>{product.categories}</p>
            </div>
        </div>

    )
}
