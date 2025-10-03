import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Button,
  Input,
  Carousel,
  Space,
} from "antd";
import {
  ShoppingOutlined,
  GiftOutlined,
  SendOutlined,
} from "@ant-design/icons";
import ReusbaleCarousal from "../components/Carousal";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const HomePage = () => {
  const categories = [
    { title: "Electronics", icon: <ShoppingOutlined /> },
    { title: "Fashion", icon: <ShoppingOutlined /> },
    { title: "Home & Living", icon: <ShoppingOutlined /> },
  ];

  const featuredProducts = [
    { title: "Product 1", price: "$99.99", image: "placeholder.jpg" },
    { title: "Product 2", price: "$149.99", image: "placeholder.jpg" },
    { title: "Product 3", price: "$199.99", image: "placeholder.jpg" },
    { title: "Product 4", price: "$299.99", image: "placeholder.jpg" },
  ];

  return (
    <Layout>
      <Content>
        {/* Hero Section */}
        <ReusbaleCarousal />

        {/* Categories Section */}
        <div className="py-12 px-4">
          <Title level={2} className="text-center mb-8">
            Shop by Category
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {categories.map((category) => (
              <Col key={category.title} xs={24} sm={12} md={8}>
                <Card hoverable className="text-center">
                  <Space direction="vertical" align="center">
                    {category.icon}
                    <Title level={4}>{category.title}</Title>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Products */}
        <div className="bg-gray-50 py-12 px-4">
          <Title level={2} className="text-center mb-8">
            Featured Products
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {featuredProducts.map((product) => (
              <Col key={product.title} xs={24} sm={12} md={6}>
                <Card
                  hoverable
                  cover={<div className="aspect-square bg-gray-200" />}
                >
                  <Meta title={product.title} description={product.price} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Special Offers Banner */}
        <div className="my-12 px-4">
          <Card className="text-center bg-blue-50">
            <Space direction="vertical" size="large">
              <GiftOutlined style={{ fontSize: "2rem" }} />
              <Title level={3}>Special Offer!</Title>
              <Paragraph>Get 20% off on your first purchase</Paragraph>
              <Button type="primary" size="large">
                Shop Now
              </Button>
            </Space>
          </Card>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 px-4 text-center">
          <Space direction="vertical" size="large" className="w-full">
            <Title level={2}>Subscribe to Our Newsletter</Title>
            <Paragraph>
              Stay updated with our latest offers and products
            </Paragraph>
            <Row justify="center">
              <Col xs={24} sm={16} md={12} lg={8}>
                <Input.Search
                  placeholder="Enter your email"
                  enterButton={
                    <>
                      <SendOutlined /> Subscribe
                    </>
                  }
                  size="large"
                />
              </Col>
            </Row>
          </Space>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
