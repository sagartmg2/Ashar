import React, { useState } from 'react'
import axios from "axios"
import ErrorText from '../../component/ErrorText.jsx';
import { useNavigate } from "react-router-dom";


export default function Create() {


    const navigate = useNavigate();

    const [data, setData] = useState({
        name: " ",
        price: "",
        categories: [],
        images: [],
    });

    const [errors, setErrors] = useState({});

    function handleSubmit(event) {

        event.preventDefault()
        // console.log(event.target.name.value)
        // console.log(event.target.email.value)

        let { name, price, categories, images } = data

        // process.env.SERVER_URL


        // for image use FormData;

        let form_data = new FormData();
        form_data.append("name", name)
        form_data.append("price", price)
        let c_arr = categories.split(",")
        console.log({ c_arr });

        // form_data.append("categories[]", c_arr)

        c_arr.forEach(el => {
            form_data.append("categories[]", el)
        })

        let images_arr = [...images];
        images_arr.forEach(el => {
            form_data.append("images", el)
        })

        console.log(form_data)

        axios.post(`${process.env.REACT_APP_SERVER_URL}/products`, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")} `
            }
        })
            .then(function (response) {
                // handle success
                // let a = {}.random_key.random_key
                // console.log(response);
                // navigate("/login")

            })
            .catch(function (error) {
                // handle error
                console.log(error?.response?.data?.errors);
                setErrors({})

                error?.response?.data?.errors?.forEach(el => {
                    // setER
                    setErrors((prev_errors) => {
                        return {
                            ...prev_errors,
                            [el.param]: el.msg
                        }
                    })

                    // function sum() {
                    //     console.log("inisde");
                    // }

                    // let sum = () => (console.log("insdide"));
                    // let sum = () => { return console.log("insdide") };

                })
            })


        /* 
        
        let person  ={
            name,
            address:{
                district,
                munici,
                tol,
                ward,
            }
        }
    
        */
    }


    function handleChange(e) {
        // setData();
        const { name, value } = e.target
        // name = "email"
        console.log("resul", name, value);

        // console.log(e.target.type);
        if (e.target.type == "file") {
            setData({
                ...data,
                [name]: e.target.files
            })
        } else {
            setData({
                ...data,
                [name]: value
            })
        }

        setErrors({
            ...errors,
            [name]: "",
        })
    }

    return (
        <form mt-5 onSubmit={handleSubmit}>
            <div class="mb-3 mt-5">
                <label for="name" class="form-label required">Name</label>
                <input type="text" class="form-control" name='name' id="name"
                    onChange={handleChange}
                    value={data.name}
                    aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label required">Price</label>
                <input type="text" class="form-control" name='price'
                    onChange={handleChange}
                    value={data.price}
                    id="email" aria-describedby="emailHelp" />

                <ErrorText
                    errors={errors}
                    field="email"
                    data={data}
                />

            </div>
            <div class="mb-3">
                <label htmlFor="" class="form-label required">Categories</label>
                <input type="text" class="form-control" id="" name='categories' onChange={handleChange}
                    value={data.categories} />
            </div>
            <div class="mb-3">
                <label htmlFor="" class="form-label required">images</label>
                <input type="file" multiple class="form-control" id="" name='images' onChange={handleChange}
                />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
