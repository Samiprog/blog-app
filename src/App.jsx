// src/App.jsx
import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Settings from "./pages/Settings";
import { initialPosts } from "./data/posts";

const { Content } = Layout;

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [posts, setPosts] = useState(initialPosts);

  // Handlers
  const handleAdd = (newPost) => {
    setPosts([...posts, newPost]);
    setSelectedPage("posts");
  };

  const handleEdit = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar onMenuClick={setSelectedPage} />
      <Layout>
        <Head />
        <Content style={{ margin: "16px", padding: "20px", background: "#fff" }}>
          {selectedPage === "dashboard" && <Dashboard posts={posts} />}
          {selectedPage === "posts" && (
            <Posts posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
          )}
          {selectedPage === "create" && <CreatePost onAdd={handleAdd} />}
          {selectedPage === "settings" && <Settings />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
