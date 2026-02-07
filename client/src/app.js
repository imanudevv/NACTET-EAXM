import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => { loadUsers(); }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const submit = async () => {
    if (!form.name || !form.email || !form.age) {
      alert("All fields required");
      return;
    }

    if (editId) {
      await axios.put(`http://localhost:5000/api/users/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/users", form);
    }

    setForm({ name: "", email: "", task: "" });
    loadUsers();
  };

  const edit = (user) => {
    setForm(user);
    setEditId(user._id);
  };

  const remove = async (id) => {
    await axios.delete(`https://server-render-1-22u6.onrender.com/api/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h2>MERN CRUD – Users</h2>

      <input placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input placeholder="Task"
        value={form.task}
        onChange={e => setForm({ ...form, task: e.target.value })} />

      <button onClick={submit}>{editId ? "Update" : "Add"}</button>

      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.name} ({u.email})
            <button onClick={() => edit(u)}>Edit</button>
            <button onClick={() => remove(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
