import React, { useState, useEffect, useContext } from "react";
import '../UserTable/TableStyle.css'
import { DataContext } from "../Context/ContextAPI";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";




const UserTable = () => {
  const {setUserData} = useContext(DataContext);
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);
  

  const handleEdit = (user) => {
    setEdit(user);
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) =>
      user.id === edit.id ? edit : user
    );
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
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
 
    <TableContainer>
      <Table className="table">
        <TableHead className="thead">
          <TableRow className="tr">
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tbody">
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="td">{user.id}</TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
                    value={edit.name}
                    onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
                    value={edit.username}
                    onChange={(e) =>
                      setEdit({ ...edit, username: e.target.value })
                    }
                  />
                ) : (
                  user.username
                )}
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
                    value={edit.email}
                    onChange={(e) =>
                      setEdit({ ...edit, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
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
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
                    value={edit.phone}
                    onChange={(e) =>
                      setEdit({ ...edit, phone: e.target.value })
                    }
                  />
                ) : (
                  user.phone
                )}
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
                    value={edit.website}
                    onChange={(e) =>
                      setEdit({ ...edit, website: e.target.value })
                    }
                  />
                ) : (
                  user.website
                )}
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <TextField
                    size="small"
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
              </TableCell>
              <TableCell className="td">
                {edit && edit.id === user.id ? (
                  <>
                    <IconButton className="save-btn" onClick={handleSave}>
                      <SaveIcon />
                    </IconButton>
                    <IconButton className="cancel-btn" onClick={handleCancel}>
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell className="td">
                <IconButton
                  className="delete-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </>
  );
};

export default UserTable;
