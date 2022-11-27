import { useState} from "react";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, MenuList, Stack, Typography, useTheme } from "@mui/material";
import { Link ,Outlet} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Logo from './../img/LOGO.svg'
import './../styles/Sidebar.css'
import { EventAvailableSharp, HomeOutlined, LoginOutlined, LogoutOutlined, MenuOpenOutlined, MenuOutlined, NotificationImportantOutlined, PeopleOutlineOutlined, Settings } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >  
          <Link to={to}><Typography>{title}</Typography></Link>
    </MenuItem>
  );
};

const SidebarC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Stack direction='row' height='100vh'
    >
      <Sidebar collapsed={isCollapsed} sx={{height:'100vh'}}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined/> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img src={Logo} width='100px' alt="" />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined/>
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{mt:3}}>
            <Item
              title="Porfile"
              to="/actu/Myaccount/0000/profil"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notifications"
              to="/notification"
              icon={<NotificationImportantOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              to="/Setting"
              icon={<Settings />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Events"
              to="/actu/Myaccount/0000/event"
              icon={<EventAvailableSharp/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Log out"
              to="/"
              icon={<LogoutOutlined/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
      <Stack flexGrow={2}  width="75%"  sx={{mt:5}}>
             <Outlet/>
           
      </Stack>
    </Stack>
  );
};

export default SidebarC;