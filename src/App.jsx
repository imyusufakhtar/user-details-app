import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailId: '',
        address: '',
    });
    const [editId, setEditId] = useState(null);

    // Load userInfo from local storage when the app loads
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            const updatedUsers = users.map(user => 
                user.id === editId ? { ...formData, id: editId } : user
            );
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        } else {
            const newUser = { ...formData, id: uuidv4() };
            setUsers([...users, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
        }
        setFormData({ firstName: '', lastName: '', phoneNumber: '', emailId: '', address: '' });
        setEditId(null);
    };

    const handleEdit = (user) => {
        setFormData(user);
        setEditId(user.id);
    };

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <div className="container">
            <UserForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                editId={editId} 
            />
            <UserList 
                users={users} 
                handleDelete={handleDelete} 
                handleEdit={handleEdit} 
            />
        </div>
    );
};

export default App;
