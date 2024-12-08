import axios from 'axios';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserRegistration.css';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {

    const [id, setId] = useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [marks, setMarks] = useState('');
    const navigate = useNavigate();

    async function save(event) {

        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/save",
                {
                    id: id,
                    userName: username,
                    password: password,
                    marks: marks
                }
            );
            alert("User Registered Successfully");
            setId('');
            setUsername("");
            setPassword("");
            setMarks('')
        }
        catch(err){
            alert("User Registration failed");
        }
    }

    function goToUserSearch() {
        navigate('/UserSearch');
    }
    

    return (
      <div className="container mt-4">
        <form>
  <div className="form-group">
    <label>User Name</label>
    <input type="user_name" className="form-control" placeholder="Enter User Name"
    value={username}
    onChange={(event) => {
        setUsername(event.target.value);
    }}
    />

  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" placeholder="Enter Password"
    value={password}
    onChange={(event) => {
        setPassword(event.target.value);
    }}
    />
  </div>
  <div className="form-group">
    <label>Marks</label>
    <input type="marks" className="form-control" placeholder="Enter Marks"
    value={marks}
    onChange={(event) => {
        setMarks(event.target.value);
    }}
    />
  </div>
    <div className="button-group">
  <button type="submit" className="btn btn-primary" onClick={save}>Submit</button>
  <button type="submit" className="btn btn-primary" onClick={goToUserSearch}>Entries</button> 
  </div>
    </form>
      </div>
    )
  }
  
  export default UserRegistration