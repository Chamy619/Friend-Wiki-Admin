import Box from '@mui/material/Box';
import HeaderContainer from '../../containers/common/HeaderContainer';

function Template({ children }) {
  return (
    <Box sx={{ width: '100%' }}>
      <HeaderContainer />
      {children}
    </Box>
  );
}

export default Template;
