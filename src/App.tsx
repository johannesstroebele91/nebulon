import React from "react";
import {
  Layout,
  Menu,
  Typography,
  Space,
  Table,
  Tooltip,
  Pagination,
} from "antd";
import Title from "antd/es/typography/Title";
import { ColumnsType } from "antd/es/table";

const { Header, Content, Footer } = Layout;
const { Text, Link, Paragraph } = Typography;

const App: React.FC = () => {
  /* TODO add theme later const {
    token: { colorBgContainer },
  } = theme.useToken();  */

  const menuItems = [
    {
      key: "home",
      label: "Home",
    },
  ];

  interface Quote {
    id: number;
    author: string;
    quote: string;
    userId: number;
  }

  const quotes: Quote[] = [
    {
      id: 1,
      author: "Arnold Schwarzenegger",
      quote: "If it jiggles, it's fat.",
      userId: 2,
    },
    {
      id: 2,
      author: "Arnold Schwarzenegger",
      quote:
        "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",
      userId: 2,
    },
    {
      id: 3,
      author: "Muhammad Ali",
      quote:
        "I don't count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count.",
      userId: 3,
    },
    {
      id: 4,
      author: "Muhammad Ali",
      quote:
        "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’",
      userId: 3,
    },
    {
      id: 5,
      author: "Bruce Lee",
      quote:
        "It's not the daily increase but daily decrease. Hack away at the unessential.",
      userId: 3,
    },
    {
      id: 6,
      author: "Chris Evans",
      quote:
        "I have a love-hate relationship with the gym. Every time I go, I hate it. But then I feel great afterwards, so I love it.",
      userId: 1,
    },
    {
      id: 7,
      author: "Steve Jobs",
      quote: "The only way to do great work is to love what you do.",
      userId: 1,
    },
    {
      id: 8,
      author: "Rich Piana",
      quote:
        "If you still look good at the end of your workout, you didn't train hard enough.",
      userId: 1,
    },
    {
      id: 9,
      author: "Henry Ward Beecher",
      quote:
        "I always say, 'The body is like a piano, and happiness is like music.' It is needful to have the instrument in good order.",
      userId: 2,
    },
    {
      id: 10,
      author: "Markus Rühl",
      quote: "I don't do this to be healthy, I do this to get big muscles.",
      userId: 3,
    },
  ];

  interface User {
    id: number;
    name: string;
    age: number;
  }

  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Link href="https://ant.design" target="_blank">
          {text}
        </Link>
      ),
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: 80,
    },
  ];

  const user: User[] = [
    {
      id: 1,
      name: "John Brown",
      age: 32,
    },
    {
      id: 2,
      name: "Jim Green",
      age: 42,
    },
    {
      id: 3,
      name: "Joe Black",
      age: 32,
    },
  ];

  const randomQuoteId = Math.floor(Math.random() * 10) + 1;
  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={menuItems}
        />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        {/* TODO fix breadcrumb later
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Title>Nebulon</Title>
        <Space style={{ paddingBottom: 18 }}>
          <Text italic>{quotes[randomQuoteId].quote}</Text>
          <Text>{quotes[randomQuoteId].author}</Text>
          <Link href="https://ant.design" target="_blank">
            This quote was picked by ${quotes[randomQuoteId].userId}
          </Link>
        </Space>
        <Title type="secondary">Board</Title>
        <Table columns={columns} dataSource={user} />
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </Paragraph>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
