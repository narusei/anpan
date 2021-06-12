import {
  AppBar as MuiAppBar,
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  Hidden,
  IconButton as MuiIconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Grid as MuiGrid,
  Grid,
  IconButton,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components/macro';
import { AppBase } from '../../../components/common/AppBase';
import { AppMain } from '../../../components/common/AppMain';
import { DrawerList } from './drawer-list';

const drawerWidth = 200;

const DrawerNav = styled.nav`
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;

const MenuButton = styled(MuiIconButton)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`;

const AppBar = styled(MuiAppBar)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    z-index: calc(${(props) => props.theme.zIndex.drawer} + 1);
  }
`;

const ToolbarSpacing = styled.div`
  min-height: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  }
`;

const LeftGrid = styled(MuiGrid)`
  flex-grow: 1;
`;

export type WithResponsiveDrawerLayoutProps = {
  left?: JSX.Element;
  right?: JSX.Element;
  window?: () => Window;
};

export const WithResponsiveDrawerLayout: React.FC<WithResponsiveDrawerLayoutProps> = (
  props
) => {
  const { left, right, window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ToolbarSpacing />
      <Divider />
      <List>
        {DrawerList.map((drawerItem) => (
          <ListItem button key={drawerItem.key}>
            <ListItemIcon>{drawerItem.icon}</ListItemIcon>
            <ListItemText primary={drawerItem.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBase direction="row">
      <CssBaseline />
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <MenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </MenuButton>
          <LeftGrid>
            <img
              src="/static/img/anpan-logo.svg"
              alt="Anpan"
              title="Anpan アンパン"
              width="94px"
              height="100%"
            ></img>
            {left}
          </LeftGrid>
          <Grid justify="flex-end">
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            {right}
          </Grid>
        </Toolbar>
      </AppBar>
      <DrawerNav aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </DrawerNav>
      <AppMain>
        <ToolbarSpacing />
        <Grid>{props.children}</Grid>
      </AppMain>
    </AppBase>
  );
};
