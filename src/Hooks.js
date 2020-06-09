import React, { useState, useEffect } from 'react';
import Home from './Home.js';

 const Hooks = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        setInterval(() => setCount(count + 1),3000);
        console.warn("message",count);
      },[count]);
   
      return (
        <div className = 'app_name'>
            <h1> {props.name}</h1>
           
            <Home count = {count}/>
        </div>
    );
}
export default Hooks;