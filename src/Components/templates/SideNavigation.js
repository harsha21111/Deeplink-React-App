import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {  FaDesktop,FaClipboardList } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {FiLogOut} from "react-icons/fi";
//import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";


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
        <MenuItem icon={<FaDesktop />}>  <Link to = "/">Dashboard</Link></MenuItem>
          
        <MenuItem icon={<FaClipboardList />}> <Link to = "/campaigns">Campaigns</Link></MenuItem>
        
        {/* <MenuItem icon={<FaClipboardList />}>Deeplink</MenuItem>
        <MenuItem icon={<FaClipboardList />}>Event</MenuItem>         */}
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