
export default function Button(props) {
  console.log(props)
  return (
    <button type="button">
      {props.type} Button
    </button>
  )
}
