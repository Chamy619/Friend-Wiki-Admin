import Box from '@mui/material/Box';
import HeaderContainer from '../../containers/common/HeaderContainer';
import Title from './Title';

function Template({ children, title }) {
  return (
    <Box sx={{ width: '100%' }}>
      <HeaderContainer />
      <Title text={title} />
      {children}
    </Box>
  );
}

export default Template;
