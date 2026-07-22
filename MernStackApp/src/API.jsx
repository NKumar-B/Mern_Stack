import React, { useState, useEffect } from 'react'
import axios from 'axios'

function API() {
    const [users, setUsers] = useState([])
    const [view, setView] = useState('') // 'add', 'update', 'delete', or ''
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // GET Request: Fetch users on load or button click
    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
                alert("Users fetched successfully (GET Request)!")
            })
            .catch(error => {
                console.log(error)
                alert("Failed to fetch users!")
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    // POST Request: Add User
    const handleAddUser = (e) => {
        e.preventDefault()
        const newUser = { name, email, phone }
        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
            .then(response => {
                setUsers([...users, response.data])
                alert("User added successfully (POST Request)!")
                resetForm()
            })
            .catch(error => {
                console.log(error)
                alert("Failed to add user!")
            })
    }

    // PUT Request: Update User
    const handleUpdateUser = (e) => {
        e.preventDefault()
        if (!userId) {
            alert("Please enter a User ID to update!")
            return
        }
        const updatedData = { name, email, phone }
        axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedData)
            .then(response => {
                setUsers(users.map(u => u.id === parseInt(userId) ? { ...u, ...updatedData } : u))
                alert(`User ${userId} updated successfully (PUT Request)!`)
                resetForm()
            })
            .catch(error => {
                console.log(error)
                alert("Failed to update user!")
            })
    }

    // DELETE Request: Delete User
    const handleDeleteUser = (e) => {
        e.preventDefault()
        if (!userId) {
            alert("Please enter a User ID to delete!")
            return
        }
        axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                setUsers(users.filter(u => u.id !== parseInt(userId)))
                alert(`User ${userId} deleted successfully (DELETE Request)!`)
                resetForm()
            })
            .catch(error => {
                console.log(error)
                alert("Failed to delete user!")
            })
    }

    // Reset Form and View
    const resetForm = () => {
        setName('')
        setEmail('')
        setPhone('')
        setUserId('')
        setView('')
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Methods</h2>

            {/* Action Buttons Header */}
            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => { resetForm(); setView('add'); }}
                    style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
                >
                    Add User
                </button>
                <button
                    onClick={() => { resetForm(); setView('update'); }}
                    style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#2196F3', color: 'white', border: 'none' }}
                >
                    Update User
                </button>
                <button
                    onClick={() => { resetForm(); setView('delete'); }}
                    style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none' }}
                >
                    Delete User
                </button>
                <button
                    onClick={fetchUsers}
                    style={{ margin: '5px', padding: '10px 15px', cursor: 'pointer', backgroundColor: '#ff9800', color: 'white', border: 'none' }}
                >
                    Fetch Users
                </button>
            </div>

            {/* ADD USER FORM */}
            {view === 'add' && (
                <div style={{ border: '1px solid #4CAF50', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                    <h3>Add User Form (POST)</h3>
                    <form onSubmit={handleAddUser}>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <button type="submit" style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>
                            Submit Add User
                        </button>
                        <button type="button" onClick={resetForm} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>
                            Close
                        </button>
                    </form>
                </div>
            )}

            {/* UPDATE USER FORM */}
            {view === 'update' && (
                <div style={{ border: '1px solid #2196F3', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                    <h3>Update User Form (PUT)</h3>
                    <form onSubmit={handleUpdateUser}>
                        <input
                            type="number"
                            placeholder="Enter User ID to Update"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter New Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter New Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter New Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <button type="submit" style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>
                            Submit Update User
                        </button>
                        <button type="button" onClick={resetForm} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>
                            Close
                        </button>
                    </form>
                </div>
            )}

            {/* DELETE USER FORM */}
            {view === 'delete' && (
                <div style={{ border: '1px solid #f44336', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
                    <h3>Delete User Form (DELETE)</h3>
                    <form onSubmit={handleDeleteUser}>
                        <input
                            type="number"
                            placeholder="Enter User ID to Delete"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            style={{ margin: '5px', padding: '8px' }}
                            required
                        />
                        <button type="submit" style={{ margin: '5px', padding: '8px 15px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
                            Confirm Delete User
                        </button>
                        <button type="button" onClick={resetForm} style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}>
                            Close
                        </button>
                    </form>
                </div>
            )}

            {/* Fetched User Details */}
            <h3>Fetched Users Details (GET)</h3>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default API
