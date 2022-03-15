import { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    department:"",
    marital_state: "",
  });

  const handleChange = (e) => {
    const {id,value} = e.target
    // console.log(e.target.value);
    setFormData({...formData, [id]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/data", formData).then(() => {
      alert("data saved");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name : </label>
      <input id="name" onChange={handleChange} type="text" />
      <br />
      <label>Age : </label>
      <input id="age" onChange={handleChange} type="Number" />
      <br />
      <label>Address : </label>
      <input id="address" onChange={handleChange} type="text" />
      <br />
      <label>Department : </label>
      <select onChange={handleChange} name="" id="department">
          <option value="">select one</option>
        <option value="Mechanical">Mechanical</option>
        <option value="E&TC">E&TC</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
      </select>
      <br />
      <label>Salary : </label>
      <input id="salary" onChange={handleChange} type="Number" />
      <br />
      <label>Marital State : </label>
      <br/>
      <label >yes</label>
      <input
        id="marital_state"
        onChange={handleChange}
        name="married"
        value="married"
        type="Checkbox"
      />
      <br/>
      <label >no</label>
      <input
        id="marital_state"
        onChange={handleChange}
        name="married"
        value="unmarried"
        type="Checkbox"
      />
      <br />
      <input onChange={handleChange} type="Submit" value={"Submit Data"} />
    </form>
  );
};
