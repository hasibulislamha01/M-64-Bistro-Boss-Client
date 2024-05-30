import { Box, Divider, Drawer, List, Toolbar, } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CiMail } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const drawerWidth = 240;



const UserSideMenu = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin)

    const dashItem1 = {
        name: 'user Home',
        link: '/dashboard/user'
    }
    const dashItem2 = {
        name: 'Reservation',
        link: '/dashboard/reservation'
    }
    const dashItem3 = {
        name: 'Payment History',
        link: '/dashboard/history'
    }
    const dashItem4 = {
        name: 'My Cart',
        link: '/dashboard/carts'
    }
    const dashItem5 = {
        name: 'My Bookings',
        link: '/dashboard/bookings'
    }
    const dashItem6 = {
        name: 'Pay',
        link: '/dashboard/payment'
    }

    const adminItem1 = {
        name: 'Admin Home',
        link: '/dashboard/admin/home'
    }
    const adminItem2 = {
        name: 'Add Items',
        link: '/dashboard/admin/addItems'
    }
    const adminItem3 = {
        name: 'Manage Items',
        link: '/dashboard/admin/manageItems'
    }
    const adminItem4 = {
        name: 'Manage Bookings',
        link: '/dashboard/admin/manageBookings'
    }
    const adminItem5 = {
        name: 'All users',
        link: '/dashboard/admin/users'
    }

    const dashArr = [dashItem1, dashItem2, dashItem3, dashItem4, dashItem5, dashItem6]
    const adminArr = [adminItem1, adminItem2, adminItem3, adminItem4, adminItem5]

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
                {
                    isAdmin ?
                        <List>
                            {adminArr.map((dashItem, index) => (
                                <ListItem key={index} disablePadding>
                                    <NavLink to={dashItem.link} className={({ isActive }) => isActive ? 'bg-warning w-full' : "bg-white w-full"}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <CiMail /> : <CiStar></CiStar>}
                                            </ListItemIcon>
                                            <ListItemText primary={dashItem.name} />
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                        :
                        <List>
                            {dashArr.map((dashItem, index) => (
                                <ListItem key={index} disablePadding>
                                    <NavLink to={dashItem.link} className={({ isActive }) => isActive ? 'bg-warning w-full' : "bg-white w-full"}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <CiMail /> : <CiStar></CiStar>}
                                            </ListItemIcon>
                                            <ListItemText primary={dashItem.name} />
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                }
                <Divider />
                <List>
                    {navArr.map((navItem, index) => (
                        <ListItem key={navItem} disablePadding>
                            <NavLink to={`${navItem.link}`} className="w-full">
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <CiMail /> : <CiMail />}
                                    </ListItemIcon>
                                    <ListItemText primary={navItem.nav} />
                                </ListItemButton>
                            </NavLink>
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
    )
};

export default UserSideMenu;