import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Stack,
  SvgIcon,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SideNavItem } from './side-nav-item';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';

const items = [
  {
    title: 'Update Title',
    value: 'title',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Update Background Image',
    value: 'bg',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Update Logo',
    value: 'logo',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Update Color',
    value: 'btncolor',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBagIcon />
      </SvgIcon>
    )
  },
];

export const GameSidebar = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const theme = useTheme(); // Use useTheme hook to access theme
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs', 'sm')); // Determine if it's a small screen
  const mediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg')); // Determine if it's a medium screen

  const handleActions = (value) => {
    console.log(value);
  }

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              return (
                <SideNavItem
                  icon={item.icon}
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  handleActions={handleActions}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (mediumScreen) { // Render drawer with adjusted width for medium screens
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: '100%', // Adjusted width for medium screens
            position: 'initial'
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  if (!smallScreen) { // Render permanent drawer for large screens
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: '100%',
            position: 'initial'
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  // Render temporary drawer for small screens
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: '100%'
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

GameSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
