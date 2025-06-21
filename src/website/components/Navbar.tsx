import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '../../contexts/ThemeContext';
import logo from '../../../public/gulf-logo.png';
import { Link } from 'react-router-dom';
// أقسام الموقع الجديدة
const pages = [
  {
    name: 'الرئيسية',
    path: '/',
  },
  {
    name: 'عن الجمعية',
    path: '/about-us  ',
  },
  {
    name: 'المركز الإعلامي',
    path: '/media-center',
    subItems: [
      { name: 'أخبار الجمعية', path: '/association-news' },
      { name: 'أخبار السياحة الخليجية', path: '/gulf-tourism-news' },
    ],
  },
  {
    name: 'انضم إلينا',
    path: '/join-us',
    subItems: [
      { name: 'فرص العمل', path: '/jobs' },
      { name: 'فرص التطوع', path: '/volunteering' },
    ],
  },
  {
    name: 'تواصل معنا',
    path: '/contact-us',
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [drawerExpandedItems, setDrawerExpandedItems] = React.useState<{
    [key: string]: boolean;
  }>({});
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeMode();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
      // إعادة تعيين حالة التوسع عند إغلاق الدرج
      if (!open) {
        setDrawerExpandedItems({});
      }
    };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menuName: string
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleDrawerItemToggle = (itemName: string) => {
    setDrawerExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <AppBar
      position="static"
      sx={{
        direction: 'rtl',
        background: `${theme.palette.primary.main}`,
        boxShadow: '0 8px 32px rgba(13, 71, 161, 0.3)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Title for desktop */}
          <Typography
            component={Link}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '1.3rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            <img src={logo} alt="logo" width={150} />
          </Typography>

          {/* drawer icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="فتح القائمة"
              onClick={toggleDrawer(true)}
              sx={{
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'rotate(90deg)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                '& .MuiDrawer-paper': {
                  background: `${theme.palette.primary.main}`,
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px 0 0 20px',
                },
              }}
            >
              {/* drawer content */}
              <Box
                sx={{
                  width: 280,
                  pt: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                role="presentation"
              >
                {/* Navigation Items */}
                <List sx={{ flexGrow: 1 }}>
                  {pages.map((page) => (
                    <React.Fragment key={page.name}>
                      <ListItem disablePadding>
                        <ListItemButton
                          component={page.subItems ? 'div' : Link}
                          to={page.subItems ? undefined : page.path}
                          onClick={
                            page.subItems
                              ? () => handleDrawerItemToggle(page.name)
                              : toggleDrawer(false)
                          }
                          sx={{
                            margin: '4px 8px',
                            borderRadius: '15px',
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              transform: 'translateX(-5px)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <ListItemText
                            primary={page.name}
                            sx={{
                              color: '#FFFFFF',
                              fontWeight: 600,
                              textAlign: 'right',
                            }}
                          />
                          {page.subItems &&
                            (drawerExpandedItems[page.name] ? (
                              <ExpandLessIcon sx={{ color: '#FFFFFF' }} />
                            ) : (
                              <ExpandMoreIcon sx={{ color: '#FFFFFF' }} />
                            ))}
                        </ListItemButton>
                      </ListItem>

                      {/* sub items for mobile */}
                      {page.subItems && (
                        <Collapse
                          in={drawerExpandedItems[page.name]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {page.subItems.map((subItem) => (
                              <ListItem key={subItem.name} disablePadding>
                                <ListItemButton
                                  component={Link}
                                  to={subItem.path}
                                  onClick={toggleDrawer(false)}
                                  sx={{
                                    pl: 4,
                                    margin: '2px 16px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    '&:hover': {
                                      backgroundColor: 'rgba(255,255,255,0.2)',
                                      transform: 'translateX(-3px)',
                                    },
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  <ListItemText
                                    primary={subItem.name}
                                    sx={{
                                      color: '#FFFFFF',
                                      fontWeight: 500,
                                      textAlign: 'right',
                                      '& .MuiTypography-root': {
                                        fontSize: '0.9rem',
                                      },
                                    }}
                                  />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </React.Fragment>
                  ))}
                </List>

                {/* Theme Toggle Button in Drawer */}
                <Box
                  sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={toggleTheme}
                      sx={{
                        margin: '4px 8px',
                        borderRadius: '15px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          transform: 'translateX(-5px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        },
                        transition: 'all 0.3s ease',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ListItemText
                        primary={isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم'}
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 600,
                          textAlign: 'right',
                        }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {isDarkMode ? (
                          <LightModeIcon sx={{ color: '#FFFFFF' }} />
                        ) : (
                          <DarkModeIcon sx={{ color: '#FFFFFF' }} />
                        )}
                      </Box>
                    </ListItemButton>
                  </ListItem>
                </Box>
              </Box>
            </Drawer>
          </Box>

          {/* Logo/Title for mobile */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={'/'}
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#FFFFFF',
              justifyContent: 'flex-end',
              textDecoration: 'none',
              fontSize: '1.1rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
          >
            <img src={logo} alt="logo" width={130} />
          </Typography>

          {/* Desktop nav links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 1,
              alignItems: 'center',
            }}
          >
            {/* Theme Toggle Button - Desktop */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: '#FFFFFF',
                mx: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {pages.map((page) => (
              <Box key={page.name}>
                <Button
                  component={page.subItems ? 'div' : Link}
                  to={page.subItems ? undefined : page.path}
                  onClick={
                    page.subItems
                      ? (e: React.MouseEvent<HTMLElement>) =>
                          handleMenuOpen(e, page.name)
                      : undefined
                  }
                  endIcon={page.subItems ? <ExpandMoreIcon /> : null}
                  sx={{
                    my: 2,
                    color: '#FFFFFF',
                    display: 'flex',
                    fontWeight: 600,
                    gap: 1,
                    px: 3,
                    py: 1,
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',

                    // Shine effect
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition:
                        'left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    },

                    // Professional hover animations
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-3px) scale(1.02)',
                      boxShadow: `
                        0 12px 40px rgba(0,0,0,0.25),
                        0 6px 20px rgba(255,255,255,0.1),
                        inset 0 1px 0 rgba(255,255,255,0.2)
                      `,
                      border: '1px solid rgba(255,255,255,0.3)',

                      // Trigger shine effect
                      '&::before': {
                        left: '100%',
                      },

                      // Animate dropdown arrow
                      '& .MuiSvgIcon-root': {
                        transform: 'rotate(180deg) scale(1.1)',
                        transition:
                          'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      },
                    },

                    // Icon transition
                    '& .MuiSvgIcon-root': {
                      transition:
                        'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    },
                  }}
                >
                  {page.name}
                </Button>

                {page.subItems && (
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu === page.name}
                    onClose={handleMenuClose}
                    sx={{
                      '& .MuiPaper-root': {
                        background: `${theme.palette.primary.main}`,
                        backdropFilter: 'blur(20px)',
                        borderRadius: '15px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      },
                    }}
                  >
                    {page.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        component={Link}
                        to={subItem.path}
                        onClick={handleMenuClose}
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 500,
                          px: 3,
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            transform: 'translateX(5px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
