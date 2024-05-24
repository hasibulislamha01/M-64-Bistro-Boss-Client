import { Box, Divider, Drawer, List, Toolbar, } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CiMail } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const SideMenu = () => {

    const dashItem1 = {
        name: 'Admin Home',
        link: '/dashboard'
    }
    const dashItem2 = {
        name: 'Add Items',
        link: '/dashboard/add'
    }
    const dashItem3 = {
        name: 'Manage Items',
        link: '/dashboard/manage'
    }
    const dashItem4 = {
        name: 'Manage Bookings',
        link: '/dashboard/bookings'
    }
    const dashItem5 = {
        name: 'All Users',
        link: '/dashboard/users'
    }

    const dashArr = [dashItem1, dashItem2, dashItem3, dashItem4, dashItem5]


    const navItem1 = {
        nav: 'Home',
        link: '/',
    }
    const navItem2 = {
        nav: 'Menu',
        link: '/menues',
    }
    const navItem3 = {
        nav: 'Shop',
        link: '/shop',
    }
    const navArr = [navItem1, navItem2, navItem3]
    return (
        <Box sx={{ display: 'flex', width: drawerWidth, backgroundColor: '#D1A054' }}>

            <Drawer
                sx={{
                    width: drawerWidth,
                    backgroundColor: '#D1A054',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {dashArr.map((dashItem, index) => (
                        <ListItem key={index} disablePadding>
                            <Link to={dashItem.link} className="w-full">
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <CiMail /> : <CiStar></CiStar>}
                                    </ListItemIcon>
                                    <ListItemText primary={dashItem.name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {navArr.map((navItem, index) => (
                        <ListItem key={navItem} disablePadding>
                            <Link to={`${navItem.link}`} className="w-full">
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <CiMail /> : <CiMail />}
                                    </ListItemIcon>
                                    <ListItemText primary={navItem.nav} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

            </Box>
        </Box>
    );
};

export default SideMenu;