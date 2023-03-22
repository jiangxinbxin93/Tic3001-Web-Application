
import React, { useEffect, useState } from "react";
import axios from 'axios';


function Phonebook() {
  const emptyData = { name: "", phone: "" };

  const [contacts, setContacts] = useState(emptyData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContacts((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAdd = async(e) => {
    e.preventDefault();
    console.log(contacts);
    try{
      const resp= await axios.post("http://localhost:3000/particular", contacts);
      console.log(resp.data);

    }
    catch(err){
console.log(err.response);

    }
  };

 

  return (
    <div className="form">
      <form onSubmit={handleAdd}>
        <div className="field">
          <label className="label has-text-left">Name</label>
          <div className="control">
            <input
              className="input"
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="e.g Alex Smith"
            />
          </div>
        </div>

        <div className="field">
          <label className="label has-text-left">Mobile</label>
          <div className="control">
            <input
              className="input"
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="e.g. 98889947"
            />
          </div>
        </div>
        <button className="button is-link mt-3 is-fullwidth" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Phonebook;
