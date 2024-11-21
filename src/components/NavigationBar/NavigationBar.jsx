import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import RecentActors from '@mui/icons-material/RecentActors';

const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box mb={4}>
      <AppBar position="static">
        <Toolbar>
          <RecentActors sx={{ fontSize: 40 }} />
          <Typography mr="18">
            <i>PhoneBook</i>
          </Typography>

          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;