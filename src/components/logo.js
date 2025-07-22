import { useTheme } from '@mui/material/styles';
import {
  Box
} from '@mui/material';
export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <Box
      // component={NextLink}
      href="/"
      sx={{
        display: 'flex',
      }}
    >
      {/*<img src="/icon.png" alt="Logo" style={{ height: 100, paddingTop: 10, paddingBottom: 10 }} />*/}
    </Box>
  );
};
