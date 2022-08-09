import { useState,useEffect } from "react";

export default function Button(props) {

  const [state, setstate] = useState(false);

  // constructor() {
  //   super();
  //   this.state = { checked: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  console.log(props)

  function handleClick() {
    alert("clicked")
  }

  return (
    <button onClick={handleClick} type="button">
      {props.type} Button
    </button>
  )
}
