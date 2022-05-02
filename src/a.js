
// 1-> Use State 
// 2-> useEffect
// 4-> use Ref
// 3-> react router
// 5-> 


// import React, { useState } from 'react';



function Example() {
  // "count" التصريح عن متغير حالة جديد سندعوه
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



const [count, setCount] = useState(0);

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});

// return (
//   <div>
//     <p>You clicked {count} times</p>
//     <button onClick={() => setCount(count + 1)}>
//       Click me
//     </button>
//   </div>
// );

