import React from 'react';

const UserForm = ({ formData, handleChange, handleSubmit, editId }) => {
    return (
        <div className="form-section">
            <h2>User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input 
                        type="text" 
                        id="first-name" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input 
                        type="text" 
                        id="last-name" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="emailId" 
                        value={formData.emailId} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea 
                        id="address" 
                        name="address" 
                        rows="3" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="submit">{editId ? 'Update' : 'Add'} User</button>
            </form>
        </div>
    );
};

export default UserForm;
