import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";


export default function TableComponent({
  headers,
  users,
  handleSelectAllClick,
  handleClick,
  isSelected,
  selectAll,
  handleEdit,
  handleDelete,
}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                onClick={handleSelectAllClick}
                checked={selectAll}
              />
            </TableCell>
            {headers.map((header) => (
              <TableCell key={header.id} sx={{ fontWeight: "1000" }}>
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                ...(isSelected(user.name) && { backgroundColor: "#D3D3D3" }),
              }}
              onClick={(event) => handleClick(event, user.name)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isSelected(user.name)}
                  onClick={(event) => handleClick(event, user.name)}
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleEdit(user.id)}>
                  <BorderColorOutlinedIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(user.id)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
