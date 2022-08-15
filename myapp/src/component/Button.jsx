import { useState, useEffect } from "react";
import Text from "./Text";

export default function Button(props) {

  const [state, setState] = useState("");
  const [count, setCount] = useState(0);

  let name = "John"

  useEffect(() => {
    console.log("use-effect");
    return () => {
      console.log("use-effect-cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("use-effect => change  in state");
  }, [count, state]);

  // },[]);
  // },[state]);
  // },  [count]);
  // },  [count,state]);

  // constructor() {
  //   super();
  //   this.state = { checked: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // console.log(props)

  function handleClick() {
    // alert("clicked")
    setCount(prev => { return prev + 1 })
    setCount(prev => { return prev + 1 })
    setState("chagned...")


    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    console.log({ count })
    // setCount(count + 1)
  }

  console.log("render.....");

  function handleChange() {
    console.log("handle change...");
    name = "Chagned"
  }

  console.log(props.title);
  // <button>
  // </button>
  return (
      <Text setstate={setState} title={props.title} />
  )

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick} type="button">
        {props.type} Button
      </button>
      {/* <input value={state} onChange={() => setState("new value")} /> */}
      <h1>{name}</h1>
      <input value={state} onChange={function () { setState("new value") }} />
      {/* <input value={state}  onChange={ setState("new value")} /> */}
      {/* <input value={state}  onChange={ setState("new value")} /> */}
      <input value={state} onChange={() => handleChange()} />


    </>

  )
}
