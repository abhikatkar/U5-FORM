import axios from "axios";
import { useEffect, useState } from "react";


export const Table = ()=>{
    const [item , setItem] = useState([])

    useEffect(()=>{
        getData();

    },[])

    const getData = ()=>{
        axios.get("http://localhost:3030/data").then((res) =>{setItem(res.data)})
    }
    // console.log(item[0])
    return (
      <div>
           <table className="table" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            
            <th>Department</th>
            <th>Salary</th>
            <th>Marital State</th>
          </tr>
        </thead>
        <tbody>
          {item.map((d) => {
              console.log(d.name)
            return (
              <tr  className="Details">
                <td className="name">{d.name}</td>
                <td className="age">{d.age} </td>
                <td className="address">{d.address}</td>
                <td className="department">{d.department}</td>
                <td className="salary">{d.salary}</td>
                <td className="marital state">{d.marital_state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    )
}