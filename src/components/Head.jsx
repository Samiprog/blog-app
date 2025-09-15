// src/components/Header.jsx
import { Layout } from "antd";

const { Header } = Layout;

const Head = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      Admin Panel
    </Header>
  );
};

export default Head;
