// ignore unused exports default
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

export default () => {
  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          <StyledTableRow>
            <p>Hello</p>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableRow = styled(TableRow)({
  "&:last-child > th, &:last-child > td": {
    borderBottom: 0,
  },
});
