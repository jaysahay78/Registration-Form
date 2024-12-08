import axios from 'axios';
import React, { useState, useEffect } from "react";
import Table from 'React-bootstrap/Table';
import Container from 'React-bootstrap/Container';
import Form from 'React-bootstrap/Form';
import InputGroup from 'React-bootstrap/InputGroup';
import './UserSearch.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function UserSearch(){

    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])
    const [search, setSearch] = useState('')
    return(
        <div className='userSearch'>
            <Container fluid>
                <h1 className='text-center mt-4'>Entries</h1>
                <Form>
                    <InputGroup className='my-3'>
                    <Form.Control onChange={(e) => setSearch(e.target.value)}
                     placeholder="Search Marks"/>
                    </InputGroup>
                </Form>
                <Table striped border hover className="w-100">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users
                            .filter((user) => {
                                if (search === '') return true; 
                                const marksAsString = String(user.marks); 
                                return marksAsString.includes(search);
                              })
                            
                            .map((user,index) => {
                                return <tr key = {index}>
                                    <td>{user.userName}</td>
                                    <td>{user.password}</td>
                                    <td>{user.marks}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default UserSearch;
