import React, { useState, useEffect } from "react";
import "./TableStyle.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleEdit = (user) => {
    setEdit(user);
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) => (user.id === edit.id ? edit : user));
    setUsers(updatedUsers);
    setEdit(null);
  };

  const handleCancel = () => {
    setEdit(null);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleFieldChange = (field, value) => {
    setEdit({ ...edit, [field]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(
          data.map((user) => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            phone: user.phone,
            website: user.website,
            company: user.company,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="td">{user.id}</td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.name}
                    onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.username}
                    onChange={(e) =>
                      setEdit({ ...edit, username: e.target.value })
                    }
                  />
                ) : (
                  user.username
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.email}
                    onChange={(e) =>
                      setEdit({ ...edit, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.address.city}
                    onChange={(e) =>
                      handleFieldChange("address", {
                        ...edit.address,
                        city: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.address.city
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.phone}
                    onChange={(e) =>
                      setEdit({ ...edit, phone: e.target.value })
                    }
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.website}
                    onChange={(e) =>
                      setEdit({ ...edit, website: e.target.value })
                    }
                  />
                ) : (
                  user.website
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <input
                    value={edit.company.name}
                    onChange={(e) =>
                      handleFieldChange("company", {
                        ...edit.company,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.company.name
                )}
              </td>
              <td className="td">
                {edit && edit.id === user.id ? (
                  <>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(user)}>Edit</button>
                )}
              </td>
              <td className="td">
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
