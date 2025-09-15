// src/components/Sidebar.jsx
import { Layout, Menu } from "antd";
import {
  FileTextOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ onMenuClick }) => {
  return (
    <Sider collapsible>
      <div
        className="logo"
        style={{ color: "white", padding: "16px", fontWeight: "bold" }}
      >
        Blog App
      </div>
      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => onMenuClick(key)}
        items={[
          { key: "dashboard", icon: <FileTextOutlined />, label: "Dashboard" },
          { key: "posts", icon: <FileTextOutlined />, label: "Posts" },
          { key: "create", icon: <PlusOutlined />, label: "Create Post" },
          { key: "settings", icon: <SettingOutlined />, label: "Settings" },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
