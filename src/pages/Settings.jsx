// src/pages/Settings.jsx
import { Form, Switch } from "antd";

const Settings = () => {
  return (
    <Form layout="vertical" style={{ maxWidth: 400 }}>
      <Form.Item label="Dark Mode">
        <Switch />
      </Form.Item>
      <Form.Item label="Email Notifications">
        <Switch defaultChecked />
      </Form.Item>
    </Form>
  );
};

export default Settings;
