import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function EditSection({
  users,
  userId,
  handleSubmit,
  handleCancel,
}) {
  const [editData, setEditData] = useState({
    name: getUserName(users, userId),
    email: getUserEmail(users, userId),
    role: getUserRole(users, userId),
  });

  function getUserName(users, userId) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        return users[i].name;
      }
    }
  }

  function getUserEmail(users, userId) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        return users[i].email;
      }
    }
  }

  function getUserRole(users, userId) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        return users[i].role;
      }
    }
  }

  const handleEditData = (event) => {
    setEditData({ ...editData, [event.target.name]: event.target.value });
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        variant="outlined"
        size="small"
        label="Name"
        name="name"
        value={editData.name}
        onChange={handleEditData}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Email"
        name="email"
        value={editData.email}
        onChange={handleEditData}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Role"
        name="role"
        value={editData.role}
        onChange={handleEditData}
      />
      <Button
        variant="contained"
        size="small"
        onClick={() => handleSubmit(userId, editData)}
      >
        Save
      </Button>
      <Button variant="contained" size="small" onClick={handleCancel}>
        Cancel
      </Button>
    </Stack>
  );
}
