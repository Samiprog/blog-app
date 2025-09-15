// src/pages/Posts.jsx
import { Table, Button, Space, Modal, Form, Input, Popconfirm } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const Posts = ({ posts, onEdit, onDelete }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [form] = Form.useForm();

  const showEditModal = (post) => {
    setEditingPost(post);
    form.setFieldsValue(post);
    setIsModalVisible(true);
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      onEdit({ ...editingPost, ...values });
      setIsModalVisible(false);
      setEditingPost(null);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => showEditModal(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Are you sure to delete this post?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table rowKey="id" columns={columns} dataSource={posts} />

      <Modal
        title="Edit Post"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleUpdate}
        okText="Update"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: "Please enter an author!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please enter content!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Posts;
