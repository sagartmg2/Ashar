import React, { Component } from 'react'

export default class ButtonClass extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.count = 0
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            amount: 100,
            count: 555,
            products: [],
            main_product_id: null,
            value: ""
        }
    }

    componentDidMount() {
        // api call
        // /api/products => [ { } , {}]
        // this.setState(
        //     {
        //         products: [1, 2, 3]
        //     }
        // )
        console.log("did mount");
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)

        if (prevState.main_product_id != this.state.main_product_id) {
            console.log("change product image");
        }
        // products = [
        //     // {
        //     //     id:1
        //     //     name,
        //     // }
        // ]
        console.log("updated....");
    }

    componentWillUnmount() {

    }

    handleClick() {
        // alert("class handleclick");
        // console.log(this);
        this.count += 1
        console.log(this.count)
        // this.setState(prev => {
        //     return {

        //     }
        // })
        // this.setState(
        //     {
        //         amount: this.state.amount + 1,
        //         count: this.state.count + 1
        //     }
        // )
        // this.setCount(
        //     {
        //         count: 12
        //     }
        // )

    }

    render() {
        console.log("rendering...");
        return (
            <>
                <h1>{this.count}</h1>
                {/* <h3>{this.state.amount}</h3> */}
                {/* <h4>{this.state.count}</h4> */}
                <button onClick={this.handleClick}>{this.props.type}button</button>
                <input onChange={() => this.setState({ value: "CHANGE" })} />
            </>
        )
    }
}
