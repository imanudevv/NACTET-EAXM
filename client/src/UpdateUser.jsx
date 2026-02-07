import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateUser.css'; 

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Proper controlled state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/" + id)
      .then(result => {
        setName(result.data.name || "");
        setEmail(result.data.email || "");
        setTask(result.data.task || "");
      })
      .catch(err => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();

    axios.put("http://localhost:3001/updateUser/" + id, {
      name,
      email,
      task
    })
    .then(() => navigate("/"))
    .catch(err => console.log(err));
  };

  return (
    <div className='update-user-container'>
      <div className='update-user-card'>
        <form onSubmit={Update}>
          <h2>Update User</h2>

          <div className='form-group'>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label>Task</label>
            <input
              type="text"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
