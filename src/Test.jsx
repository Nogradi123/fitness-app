import React, {useRef} from 'react'

export default function Test() {
    const data = useRef();

    const handleClick = () => {
        console.log(data.current.value, "initial value");
        localStorage.setItem("inputValue", data.current.value)
    }

    console.log(localStorage.getItem("inputValue"), "*******")
  return (
    <>
        <input ref={data}/>
        <button onClick={handleClick}>Add</button>
    </>
  )
}
