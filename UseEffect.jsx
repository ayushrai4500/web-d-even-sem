import React, { useEffect, useState } from 'react'
import { Button, Alert } from 'react-bootstrap';

function UseEffect() {
const[timer,setTimer]=useState(0);
  const[counter,setCounter]=useState(0);

useEffect(()=>{
    setTimeout(()=>{
        setTimer((timer)=>timer+1)
    },1000)
  setTimeout(()=>{
    setCounter((counter)=>counter+1)
  },1000);
});

/* useEffect(() => {
  //Runs on every render
});
useEffect(() => {
  //Runs only on the first render
}, []);
//fetch data api
  const [apiData, setApiData] = useState(null);
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]); */

// useEffect using state and Props but runs on every
  const [count, setCount] = useState(0);

  // useEffect runs when count changes
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);
/* useEffect depends on [count]
It runs every time count changes */


    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())   // FIXED
      .then(data => setApiData(data.id));
  }, []);
  return (
    <>
    <h2>UseEffect</h2>
    <p>
       The useEffect Hook allows you to perform side effects in your components.
       useEffect accepts two arguments. The second argument is optional.

        {/* useEffect(<function>, <dependency>) */}
    </p>
    <h3>Timer {timer}</h3>
    
  <div className="d-flex flex-column align-items-center">
  <h3>Couter {count} </h3>
    <Button  onClick={() => setCount(count + 1)} variant="success" className='my-2 w-50'>+</Button>
    <Button  onClick={() => setCount(count - 1)} variant="secondary" className='my-2 w-50'>-</Button>
</div>

    </>
   <>
   <h1>UseEffect Example: Self Counter</h1>
    <h2>{counter}</h2>
    <h3>API Title: {apiData}</h3>
   </>
  )
}
