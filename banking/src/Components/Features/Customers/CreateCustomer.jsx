import { useState } from "react";



function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

 

  function handleClick() {
    
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange=""
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange=""
          />
        </div>
        <button onClick=''>Create new customer</button>
      </div>
    </div>
  );
}

export default CreateCustomer;
