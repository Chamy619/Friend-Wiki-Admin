import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function UserTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>양채훈</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>삭제버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>양채훈</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>삭제버튼</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>양채훈</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>삭제버튼</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
