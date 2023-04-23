//import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Edit from "./Edit";

function Displaycontact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/particular")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  console.log(data.length)

  const handleDelete = (id,e) => {
    

    e.preventDefault();
    try {
      axios.delete(`http://localhost:3000/particular/${id}`);
    } catch (err) {
      console.log(err.response);
    }
  };



  const [updateDetail,setUpdateDetail]=useState([]);
  
  const handleEdit=(id,e)=>{
    setUpdateDetail(id);
    
  }
// function Edit(contact){
//   return(

//     <div className="columns">
//       <div className="column"><input className="input is-primary" type="text" placeholder={contact.name}/></div>
//       <div className="column"><input className="input is-primary" type="text" /></div>
//       <div className="column"><button className="button is-primary" >Update</button></div>
//     </div>

//   )

// }

  return (
    <div>
      {data.map((contact, idx) => {
        return (
          updateDetail===contact._id?<Edit contact={contact}/>:
          <div className="columns contact mt-3 is-vcentered" key={idx}>
            
            <div className="column has-text-left">{contact.name}</div>
            <div className="column has-text-left">{contact.phone}</div>
            

            <div className="buttons is-narrow">
              <button className="button is-primary" onClick={(e)=>handleEdit(contact._id,e)}>Edit</button>
              <button className="button is-danger" onClick={(e)=>handleDelete(contact._id,e)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Displaycontact;
