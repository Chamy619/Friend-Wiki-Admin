import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function GenealogyTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell align="center">이름</TableCell>
          <TableCell align="center">연도</TableCell>
          <TableCell align="center">설명</TableCell>
          <TableCell align="center">삭제</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">안영민</TableCell>
            <TableCell align="center">2020</TableCell>
            <TableCell align="left">용문 꼰대로 용문 일대를 평정해버림. 역대급 꼰대 캐릭터로 나댐왕 등극.</TableCell>
            <TableCell align="center">
              <Button variant="contained" color="error">
                삭제
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GenealogyTable;
