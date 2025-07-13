import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  Button,
  InputBase,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Description,
  Inventory,
  Logout,
  AccountCircle,
  Archive,
  Search,
  Add,
} from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { text: 'Documentos', icon: <Description />, path: '/documentos' },
  { text: 'Caixas', icon: <Inventory />, path: '/caixas' },
  { text: 'Buscar', icon: <Search />, path: '/buscar' },
];

interface LayoutProps {
  children: React.ReactNode;
  onToggleTheme?: () => void;
  mode?: 'light' | 'dark';
}

const Layout: React.FC<LayoutProps> = ({ children, onToggleTheme, mode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget as HTMLElement);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderRight: 0 }}>
      <Toolbar sx={{ justifyContent: 'center', py: 2 }}>
        <Archive sx={{ fontSize: 36, color: theme.palette.primary.main, mr: 1 }} />
        <Typography variant="h6" fontWeight={800} color="primary.main">
          Arquivo Morto
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ flexGrow: 1, mt: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                py: 1.2,
                '&.Mui-selected': {
                  backgroundColor: theme.palette.action.selected,
                  color: theme.palette.primary.main,
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, py: 1 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          sx={{ borderRadius: 2, fontWeight: 700, boxShadow: 2, py: 0.5, px: 2, fontSize: 14, minWidth: 0 }}
          onClick={() => navigate('/documentos')}
        >
          + Novo Documento
        </Button>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
          <AccountCircle />
        </Avatar>
        <Typography variant="body2" fontWeight={600}>
          Usuário
        </Typography>
        <IconButton onClick={handleMenuClick} color="inherit" sx={{ ml: 'auto' }}>
          <Logout />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>
            <Logout fontSize="small" sx={{ mr: 1 }} />
            Sair
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 0,
          bgcolor: 'background.paper',
          borderBottom: '1px solid #f0f0f0',
        }}
        color="inherit"
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 800 }}>
            Sistema de Gerenciamento de Arquivo Morto
          </Typography>
          {onToggleTheme && (
            <IconButton onClick={onToggleTheme} color="inherit" sx={{ ml: 1 }}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu lateral"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: theme.palette.background.default,
          minHeight: '100vh',
          transition: 'background 0.5s',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 