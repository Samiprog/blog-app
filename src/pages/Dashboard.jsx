// src/pages/Dashboard.jsx
import { Card, Statistic, Row, Col } from "antd";

const Dashboard = ({ posts }) => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Total Posts" value={posts.length} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Authors" value={new Set(posts.map(p => p.author)).size} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Latest Post" value={posts[posts.length - 1]?.title || "No posts"} />
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
