import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DataTable = (props) => {
  const data = props.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '50rem' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              URL
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Level
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Start Date
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              End Date
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Path
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right"><a href={row.url}>URL</a></TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.path}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
