import { Drawer, DrawerProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#93a781',
    width: '250px',
    zIndex: 9999
  }
}));

const CustomDrawerComponent = (props: DrawerProps) => {
  return <CustomDrawer {...props} />;
};

export default CustomDrawerComponent;
