import React, { useState } from 'react';
const rolePermissions = {
  Admin: ['Manage Users', 'View Reports', 'Update Settings'],
  Official: ['View Reports', 'Manage Applications'],
  Founder: ['Submit Applications', 'View Application Status'],
};

const initialUsers = [
  { id: '1', name: 'John Doe', role: 'Admin', status: 'Active', permissions: rolePermissions.Admin },
  { id: '2', name: 'Jane Smith', role: 'Official', status: 'Active', permissions: rolePermissions.Official },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('Admin');
  const [editingUser, setEditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedRole, setUpdatedRole] = useState('');
  const [updatedPermissions, setUpdatedPermissions] = useState([]);

  const handleAddUser = () => {
    if (newUserName.trim()) {
      const newUser = {
        id: Date.now().toString(),
        name: newUserName,
        role: newUserRole,
        status: 'Active',
        permissions: rolePermissions[newUserRole],
      };
      setUsers([...users, newUser]);
      setNewUserName('');
    }
  };

  const handleToggleUserStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ));
  };

  const handleOpenEditModal = (user) => {
    setEditingUser(user);
    setUpdatedName(user.name);
    setUpdatedRole(user.role);
    setUpdatedPermissions(user.permissions);
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  const handleUpdateUser = () => {
    setUsers(users.map(user =>
      user.id === editingUser.id
        ? { ...user, name: updatedName, role: updatedRole, permissions: updatedPermissions }
        : user
    ));
    handleCloseEditModal();
  };

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user =>
      user.id === id
        ? { ...user, role: newRole, permissions: rolePermissions[newRole] }
        : user
    ));
  };

  const handlePermissionChange = (permission) => {
    setUpdatedPermissions(prevPermissions =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter(p => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <div>
      <h1 className="welcomeText">User Management</h1>

      <div className="mt-6">
        <h2 className="text-2xl mb-4">Manage Accounts</h2>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="New User Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            className="border p-2 mr-2 flex-1"
          />
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="border p-2 mr-2"
          >
            <option value="Admin">Admin</option>
            <option value="Official">Official</option>
            <option value="Founder">Founder</option>
          </select>
          <button onClick={handleAddUser} className="btn-primary">Add User</button>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
              <tr>
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Role</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr className="bg-white border-b" key={user.id}>
                  <td className="px-3 py-4">{user.id}</td>
                  <td className="px-3 py-4">{user.name}</td>
                  <td className="px-3 py-4">{user.role}</td>
                  <td className={`px-3 py-4 ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                    {user.status}
                  </td>
                  <td className="px-3 py-4">
                    <button onClick={() => handleToggleUserStatus(user.id)} className={`mr-2 ${user.status === 'Active' ? 'text-red-500' : 'text-green-500'}`}>
                      {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button onClick={() => handleOpenEditModal(user)} className="text-violet-500 underline mr-2">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl mb-4">Role Assignments</h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-gray-500 uppercase border-b whitespace-nowrap">
              <tr>
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Current Role</th>
                <th className="px-3 py-3">New Role</th>
                <th className="px-3 py-3">Permissions</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr className="bg-white border-b" key={user.id}>
                  <td className="px-3 py-4">{user.id}</td>
                  <td className="px-3 py-4">{user.name}</td>
                  <td className="px-3 py-4">{user.role}</td>
                  <td className="px-3 py-4">
                    <select
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      value={user.role}
                      className="border p-1"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Official">Official</option>
                      <option value="Founder">Founder</option>
                    </select>
                  </td>
                  <td className="px-3 py-4">
                    {user.permissions.map(permission => (
                      <span key={permission} className="block">{permission}</span>
                    ))}
                  </td>
                  <td className="px-3 py-4">
                    <button onClick={() => handleOpenEditModal(user)} className="text-blue-500 underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && editingUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl mb-4">Edit User</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <select
                value={updatedRole}
                onChange={(e) => {
                  setUpdatedRole(e.target.value);
                  setUpdatedPermissions(rolePermissions[e.target.value]); 
                }}
                className="border p-2 w-full"
              >
                <option value="Admin">Admin</option>
                <option value="Official">Official</option>
                <option value="Founder">Founder</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Permissions</label>
              <div>
                {rolePermissions[updatedRole].map(permission => (
                  <div key={permission} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={updatedPermissions.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                      className="mr-2"
                    />
                    {permission}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleUpdateUser} className="btn-primary mr-2">Update</button>
              <button onClick={handleCloseEditModal} className="btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
