import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {  FaDesktop,FaUserAlt,FaClipboardList,FaMailBulk } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {FiLogOut} from "react-icons/fi";
import { BiCog } from "react-icons/bi";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaDesktop />}> Dashboard</MenuItem>
        <MenuItem icon={<FaUserAlt />}>Users</MenuItem>
        <SubMenu title="Reports" icon={<FaClipboardList />}>
          <MenuItem>Track Report</MenuItem>
          <MenuItem>Inventory Report</MenuItem>
          <MenuItem>Customer Report</MenuItem>
        </SubMenu>
        <SubMenu title="Settings" icon={<BiCog />}>
          <MenuItem>Account</MenuItem>
          <MenuItem>Permissions</MenuItem>
        </SubMenu>
        <SubMenu title="Email" icon={<FaMailBulk />}>
          <MenuItem>Notification</MenuItem>
        </SubMenu>
      </Menu>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
    </ProSidebar>
  );
};

export default SideNavigation;