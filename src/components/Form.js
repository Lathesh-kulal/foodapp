import { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [users, setUsers] = useState([]);

  const submit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:5000/add",{name,email,phoneno});
    getUsers();
  };
 
  const getUsers = async () =>{
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:5000/delete/${id}`);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="form-wrapper">
      <form onSubmit={submit}>
        <div className="form-container">
          <label className="label">Name</label>
          <input className="input" type="text"onChange={(e => setName(e.target.value))} name="name" placeholder="Name" /> 
          <label className="label">Email</label>
          <input className="input" type="email" onChange={(e => setEmail(e.target.value))} name="email" placeholder="Email" />
          <label className="label">Phone number</label>
          <input className="input" type="text" name="phoneno" onChange={(e => setPhoneno(e.target.value))} placeholder="Phone number" />
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
      <div className="userlist">
      <h3>Users</h3>
      {users.map(u => (
        <div key={u._id}>
          {u.name} {u.email} {u.phoneno}
          <button onClick={() => deleteUser(u._id)}>Delete</button><br></br>
        </div>
      ))}     
      </div>
          
    </div>
  )
}

export default Form