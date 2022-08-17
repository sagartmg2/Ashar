import React, { useState } from 'react'
import axios from "axios"


export default function Signup() {

    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email@email.com");
    const [password, setPassword] = useState("password");
    const [role, setRole] = useState("buyer");


    const [data, setData] = useState({
        name: "name state ",
        email: "",
        password: "password",
        role: ""
    });


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

        axios.post('https://mern-ecommerce70.herokuapp.com/api/users/signup', {
            name,
            email: event.target.email.value,
            role: "buyer",
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    function handleChagne(e)
    {
        // setData();
    }

    return (
        <form mt-5 onSubmit={handleSubmit}>
            <div class="mb-3 mt-5">
                <label for="name" class="form-label required">Name</label>
                <input type="text" class="form-control" name='name' id="name"
                    onChange={(e) => setData({ name: e.target.value })}
                    // onChange={(e) => setState({ name: e.target.value })} // class component
                    value={data.name}
                    aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label required">Email address</label>
                <input type="email" class="form-control" name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label required">Password</label>
                <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label required">Role</label>
                <select class="form-select" aria-label="Default select example" value={role}>
                    <option value="seller">Seller</option>
                    <option value="buyer">Buyer</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
