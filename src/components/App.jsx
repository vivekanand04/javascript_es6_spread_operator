//question :pichala video me sawal ko 2 method se banaya hai  isame tisra method hai

//practice karo kuchh

// //ek aray ko dusare array me dalna
// const citrus=["lime","lemon","orange"];
// const fruits=["apple",...citrus,"banana","coconut"];
// console.log(fruits);
// //ek object ko dusar object me dalana
// const name={
//  fName: "vivek",
//  lName: "hsrshit"
// }
// const classs={
//   class1:"one",
//   ...name,
//   class3:"four"
// }
// console.log(classs);

import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
