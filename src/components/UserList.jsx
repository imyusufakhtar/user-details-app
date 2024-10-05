import React from 'react';

const UserList = ({ users, handleDelete, handleEdit }) => {
    return (
        <div className="output-section">
            <h2>Output Details</h2>
            {users.map(user => (
                <div className="output-box" key={user.id}>
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    <p><strong>Email ID:</strong> {user.emailId}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <div className="button-container">
                        <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                        <button className="update-button" onClick={() => handleEdit(user)}>Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
