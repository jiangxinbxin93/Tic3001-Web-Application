import React, { useEffect, useState } from "react";
import axios from "axios";

function Edit(data) {
  const emptyData = { name: "", phone: "" };

  const [update, setUpdate] = useState(emptyData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdate((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const resp = await axios.patch(
        `http://localhost:3000/particular/${data.contact._id}`,
        update
      );
      console.log(resp.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <input
          className="input is-primary"
          type="text"
          name="name"
          placeholder={data.contact.name}
          onChange={handleChange}
        />
      </div>
      <div className="column">
        <input
          className="input is-primary"
          type="text"
          name="phone"
          placeholder={data.contact.phone}
          onChange={handleChange}
        />
      </div>
      <div className="column">
        <button className="button is-primary" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default Edit;
