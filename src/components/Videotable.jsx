import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedVideoTables({ analytics }) {
  console.log(analytics, "===============>dfddf");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Link</StyledTableCell>
            <StyledTableCell align="right">isShared</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {analytics.videos.filesWithDetails.map((image) => (
            <StyledTableRow key={image.id}>
              <StyledTableCell component="th" scope="row">
                {image.name}
              </StyledTableCell>
              <StyledTableCell align="right">{image.mimeType}</StyledTableCell>
              <StyledTableCell align="right">{image.size}</StyledTableCell>
              <StyledTableCell align="right">
                <a
                  href={image.webViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </StyledTableCell>
              <StyledTableCell align="right">
                {image.isShared ? "Yes" : "No"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
