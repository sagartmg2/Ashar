import React, { useState } from 'react'
import axios from "axios"
import ErrorText from '../component/ErrorText';
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email@email.com");
    const [password, setPassword] = useState("password");
    const [role, setRole] = useState("buyer");

    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "name state ",
        email: "",
        password: "password",
        role: "",
        is_checked: true
    });

    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     // effect
    //     // document.getElementById("").setInner
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);

    function handleSubmit(event) {

        event.preventDefault()
        // console.log(event.target.name.value)
        // console.log(event.target.email.value)

        let { name, role, password, email } = data

        // process.env.SERVER_URL

        axios.post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, {
            name,
            role,
            password,
            email
        })
            .then(function (response) {
                // handle success
                // let a = {}.random_key.random_key
                // console.log(response);
                navigate("/login")

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
        setData({
            ...data,
            [name]: value
        })
        setErrors({
            ...errors,
            [name]: "",
        })

        // setData(
        //     {
        //         name: "value"
        //     }
        // )

        let obj = {
            1: "one",
            a: 1,
            b: 2,
            b: 232,
        }

        let obj2 = { ...obj, c: 3, d: 4 };
        console.log(obj2);


        console.log(obj["a"]);

        // data = {email:"email@asdf.com",role:"buyer"}


    }

    return (
        <form mt-5 onSubmit={handleSubmit}>
            <div class="mb-3 mt-5">
                <label for="name" class="form-label required">Name</label>
                <input type="text" class="form-control" name='name' id="name"
                    onChange={handleChange}
                    // onChange={(e) => setState({ name: e.target.value })} // class component
                    value={data.name}
                    aria-describedby="emailHelp" />
                {/* 
                <ErrorText
                    msg="required"
                    field="name"
                    data={data}
                /> */}
                {/* {
                    errors?.random_key.random_key
                    &&
                    <h1>kkk</h1>
                } */}

            </div>
            <div class="mb-3">
                <label for="email" class="form-label required">Email address</label>
                <input type="email" class="form-control" name='email'
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleChange}
                    value={data.email}
                    id="email" aria-describedby="emailHelp" />

                <ErrorText
                    errors={errors}
                    field="email"
                    data={data}
                />

            </div>
            <div class="mb-3">
                <label for="password" class="form-label required">Password</label>
                <input type="password" class="form-control" id="password" name='password' onChange={handleChange}
                    value={data.password} />
                <ErrorText
                    errors={errors}
                    field="password"
                    data={data}
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label required">Role</label>
                <select class="form-select" aria-label="Default select example" name='role' value={data.role} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                </select>
            </div>
            <div>
                <label htmlFor="is_checked" class="form-label required">Accept conditions</label>
                <input type="checkbox" onChange={handleChange} name='is_checked' class="" id='is_checked' checked={data.is_checked} />
            </div>
            <div>
                <label htmlFor="is_checked" class="form-label required">Accept conditions</label>
                <input type="checkbox" onChange={handleChange} name='is_checkedtwo' class="" id='is_checkedtwo' checked={data.is_checked} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
