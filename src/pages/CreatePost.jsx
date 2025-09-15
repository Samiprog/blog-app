// src/pages/CreatePost.jsx
import { Form, Input, Button } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const CreatePost = ({ onAdd }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    const newPost = {
      id: Date.now(),
      title: values.title,
      content: values.content,
      author: values.author,
      date: new Date().toISOString().split("T")[0],
    };
    onAdd(newPost);
    form.resetFields();
    setLoading(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a title!" }]}
      >
        <Input placeholder="Enter post title" />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Please enter an author!" }]}
      >
        <Input placeholder="Enter author name" />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[{ required: true, message: "Please enter content!" }]}
      >
        <TextArea rows={6} placeholder="Write your post content..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePost;
