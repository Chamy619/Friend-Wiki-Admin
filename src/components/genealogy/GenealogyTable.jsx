import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function GenealogyTable({ list }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">이름</TableCell>
            <TableCell align="center">연도</TableCell>
            <TableCell align="center">설명</TableCell>
            <TableCell align="center">수정</TableCell>
            <TableCell align="center">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list &&
            list.map((item) => (
              <TableRow key={item._id}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.date}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell align="center">
                  <Button variant="contained">수정</Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="error">
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GenealogyTable;
