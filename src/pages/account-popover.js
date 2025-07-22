import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';

export default function AccountPopover(props) {
  const { anchorEl, onClose, open, id } = props;
  const router = useRouter();
  const auth = useAuth();

  const handleSignOut = useCallback(
    () => {
      onClose?.();
      auth.SignOut();
      router.push('/');
    },
    [onClose, auth, router]
  );


  return (
    <Popover
      id={id}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 150 } }}
    >

      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        {/*name and login out icon account*/}
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {auth.user && auth.user.name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  id: PropTypes.string,
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
